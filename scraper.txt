'use strict';

const moment = require('moment');
const FEB = require('./lib').FEB;
const parse = require('./lib').parse;

const competitionGroupsDB = require('./data/competitionGroups')

function FEBScrapper(competition) {
  console.log('Constructor...');
  this.competitionId = competition;
  // this._models = models;
  // this._logger = logger;
  this._feb = new FEB();
  this._feb.setCompetitionId(this.competitionId);
}

module.exports = FEBScrapper;
const proto = FEBScrapper.prototype;

proto.start = async function () {

  console.log('Iniciando...');

  this._organization = await this._getOrganization();
  this._rules = await this._getRules(this._organization.id);

  const seasons = await this._feb.getSeasons();

  // crea las temporadas si no existe ninguna
  /* for (let i = 0; i < seasons.length; i++) {
    let season = seasons[i];
    let count = 0; // await models.Season.count({ where: { title: season.title } });
    // Be careful, months in JS starts at 0.
    let start = new Date(season.id, 10, 1);
    let end = new Date(season.id + 1, 9, 31, 23, 59, 59, 999);
    if (count === 0) {
      let seasonData = {
        start,
        end,
        title: season.title
      };
      // await models.Season.create(seasonData);
    }
  }*/

  const processingSeason = seasons[0];
  const season = {
    id: '1', title: '2017/2018', start: '2017-11-01 00:00:00+00', end: '2018-10-31 23:59:59.999+00'
  }
  // await models.Season.findOne({ where: { title: processingSeason.title } });
  await this._processCategories(season, processingSeason.id);

};

proto._getOrganization = async function getOrganization() {
  const org = {
    id: 1,
    title: 'Federación de Baloncesto de Madrid',
    type: 'clupik'
  }
  return org;
};

proto._getRules = async function getRules() {
  const rule = {
    id: 1,
    organizationId: this._organization.id,
    name: 'Reglas FEB',
    winPoints: 2,
    losePoints: -1,
    drawPoints: 1,
    notShowedPoints: 0,
    notShowedScore: 0,
    showedScore: 20
  };
  /*
    let rule = await models.OrganizationRule.findOne({
      where: data
    });

    if (rule === null) {
      rule = await models.OrganizationRule.create(data);
    }
  */
  return rule;
};

proto._processCategories = async function processCategories(season, febSeasonId) {
  const feb = new FEB();
  feb.setCompetitionId(this.competitionId);
  // const models = this._models;
  const categories = await feb.getCategories(febSeasonId);

  // crea las competiciones si no existem
  for (let i = 0; i < categories.length; i++) {
    let category = categories[i];
    let competitionData = {
      organizationId: this._organization.id,
      name: category.title,
      seasonId: season.id,
      ruleId: this._rules.id
    };
    let competition = {
      id: '9', organizationId: 1, seasonId: 1, ruleId: 1, name: '1ª División Nac. Masculina'
    }
    // await models.Competition.findOne({where: competitionData});
    /* if (competition === null) {
      competition = await models.Competition.create(competitionData);
    } */

    // solo procesamos  "1ª División Nac. Masculina"
    if (category.title === competition.name) {
      console.log('Procesando', category.title, 'de la season', season.id);
      await this._processPhasesAndGroups(season, febSeasonId, competition, category.id);
    }
  }
};

proto._processPhasesAndGroups = async function processPhasesAndGroups(season, febSeasonId, competition, febCategoryId) {
  // const models = this._models;
  const feb = new FEB();
  feb.setCompetitionId(this.competitionId);
  const febGroups = await feb.getGroups(febSeasonId, febCategoryId);
  let order = 1;
  for (let i = 0; i < febGroups.length; i++) {
    let febGroup = febGroups[i];

    let phaseData = {
      competitionId: competition.id
    };
    let parsed = parse.group(febGroup.title);
    if (parsed && parsed.phase) {
      phaseData.title = parsed.phase.title;
    } else {
      phaseData.title = febGroup.title;
    }

    // se usa la unica fase de esta competición
    let phase = {
      id: 16,
      competitionId: 9,
      title: '1',
      order: 1
    }; // phasesDB.findOne(phaseData);  // await models.CompetitionPhase.findOne({ where: phaseData });

    /* if (phase === null) {
      phaseData.order = order;
      phase = await models.CompetitionPhase.create(phaseData);
      order++;
    } */

    if (phase.type === undefined) {
      let phaseType = await feb.getGroupType(febSeasonId, febCategoryId, febGroup.id);
      // TODO: Check this
      if (phaseType !== undefined)
        console.log('TODO: Check this: phaseType ', phaseType);
      // await phase.update({ type: phaseType });
    }

    let groupData = {
      phaseId: phase.id
    };

    if (parsed && parsed.group) {
      groupData.title = parsed.group.title;
    } else {
      groupData.title = 'Único';
    }

    let group = competitionGroupsDB.findOne(groupData); // await models.CompetitionGroup.findOne({ where: groupData });
    /* if (group === null) {
      group = await models.CompetitionGroup.create(groupData);
    } */
    const teams = await this._processClubsAndTeams(season, febSeasonId, febCategoryId, febGroup.id, competition, group);
    await this._processRounds(febSeasonId, febCategoryId, febGroup.id, group, teams, competition);
  }
};

proto._processClubsAndTeams = async function processClubsAndTeams(season, febSeasonId, febCategoryId, febGroupId, competition, group) {
  // const models = this._models;
  const feb = new FEB();
  feb.setCompetitionId(this.competitionId);

  let results = await feb.getClubs(febSeasonId, febCategoryId, febGroupId);
  const teams = {};
  for (let i = 0; i < results.length; i++) {
    let result = results[i];

    teams[result.team] = {
      name: result.club,
      editableName: result.club,
      seasonId: 1,
      clubId: 15,
      febName: result.team
    };
    continue;

    let club = await models.Club.findOne({
      where: {
        name: result.club
      }
    });
    if (club === null) {
      club = await models.Club.create({
        name: result.club,
        seasonId: season.id
      });
    }

    const organizationAssociationData = {
      organizationId: this._organization.id,
      clubId: club.id
    };
    let organizationAssociation = await models.OrganizationClupikClub.findOne({ where: organizationAssociationData });
    if (organizationAssociation === null) {
      await models.OrganizationClupikClub.create(organizationAssociationData);
    }


    const teamData = {
      name: competition.name,
      clubId: club.id,
      seasonId: season.id
    };

    // Side case: a club have more than one team in the same
    // competition. If we name both teams with the competition
    // name we will have a name collision. In this case, create
    // or find a team with the public team name
    let sameClubTeams = 0;
    results.forEach((element) => {
      if (result.club === element.club) sameClubTeams++;
    });
    if (sameClubTeams > 1) teamData.name = result.team;

    let team = await models.Team.findOne({ where: teamData });
    if (team === null) {
      team = await models.Team.construct(teamData);
    }

    const competitionAssociationData = {
      competitionId: competition.id,
      clubId: club.id,
      teamId: team.id
    };
    let competitionAssociation = await models.CompetitionClupikClubTeam.findOne({ where: competitionAssociationData });
    if (competitionAssociation === null) {
      await models.CompetitionClupikClubTeam.create(competitionAssociationData);
    }

    const groupTeamAssociationData = {
      teamId: team.id,
      groupId: group.id
    };
    let groupTeamAssociation = await models.CompetitionGroupTeam.findOne({ where: groupTeamAssociationData });
    if (groupTeamAssociation === null) {
      groupTeamAssociation = await models.CompetitionGroupTeam.create(groupTeamAssociationData);
    }
    await team.edit({ febName: result.team });
    teams[result.team] = team;
  }

  return teams;
};

proto._processRounds = async function processRounds(febSeasonId, febCategoryId, febGroupId, group, teams, competition) {
  const feb = new FEB();
  feb.setCompetitionId(this.competitionId);
  const rounds = await this._feb.getRounds(febSeasonId, febCategoryId, febGroupId);
  //for (let i = rounds.length - 1; i >= 0; i--) {
  for (let i = 0; i < rounds.length; i++) {
    let round = rounds[i];
    let games = await feb.getGames(febSeasonId, febCategoryId, febGroupId, round.id);
    continue;
    await this._processGames(games, round.id, group.id, teams, competition);
  }
};

proto._processGames = async function processGames(games, roundId, groupId, teams, competition) {
  // const models = this._models;
  for (let i = 0; i < games.length; i++) {
    let scrapedGame = games[i];

    let rawTeamsLine = scrapedGame.rawTeamsLine;
    // FEB splits teams using ' - '. Sometimes, a team name also includes a ' - ', so the teams
    // line is not property parsed. The else condition checks this case
    let localTeam;
    let visitorTeam;
    if (rawTeamsLine.split(' - ').length === 2) {
      localTeam = teams[scrapedGame.localTeam];
      visitorTeam = teams[scrapedGame.visitorTeam];
    } else {
      let teamsNames = Object.keys(teams);
      for (let j = 0; j < teamsNames.length; j++) {
        let teamName = teamsNames[j];
        let pos = rawTeamsLine.indexOf(teamName);
        // Team not present
        if (pos < 0) continue;
        if (pos === 0) {
          // Team is the first one
          localTeam = teams[teamName];
        } else {
          // Team is behind other team
          visitorTeam = teams[teamName];
        }
        // We have resolved both teams, no need to continue iterating
        if (localTeam && visitorTeam) break;
      }
    }

    continue;

    // TODO: Avoid recreating games
    let febGame = await models.FebRoundGame.findOne({
      where: {
        roundId,
        localTeamId: localTeam.id,
        visitorTeamId: visitorTeam.id
      }
    });

    let game;
    if (febGame === null) {
      game = await models.CompetitionGame.create({
        organizationId: this._organization.id,
        competitionId: competition.id,
        groupId: groupId,
        localTeamId: localTeam.id,
        visitorTeamId: visitorTeam.id
      });
      febGame = await models.FebRoundGame.create({
        roundId,
        gameId: game.id,
        localTeamId: localTeam.id,
        visitorTeamId: visitorTeam.id
      });
    } else {
      game = await models.CompetitionGame.findById(febGame.gameId);
    }

    game.status = scrapedGame.visitorScore === null ? 'pending' : 'finished';
    game.visitorScore = scrapedGame.visitorScore;
    game.localScore = scrapedGame.localScore;
    if (scrapedGame.stadium && scrapedGame.stadium.febId) {
      const stadium = await models.Stadium.findOne({ where: { fbmId: scrapedGame.stadium.febId } });
      if (stadium) {
        game.stadiumId = stadium.id;
      }
    }

    const date = moment(`${scrapedGame.day} ${scrapedGame.hour}`, 'DD/MM/YYYY HH:mm');
    game.date = date.toDate();

    await game.save();

    if (game.status === 'finished' || game.status === 'teamNotShowed') {
      let group = await models.CompetitionGroup.findOne({
        where: {
          id: groupId
        }
      });
      await group.updateStandings([localTeam.id, visitorTeam.id]);
    }
  }
};

const scraper = new FEBScrapper(14)
scraper.start()
