// Mock Data
var leagues = ['Laliga', 'Seria A', 'Premiere League','Turkish Super League'], 

teams = {
    'Laliga' : ['Barcelona','Real Madrid', 'Atletico Madrid','Alaves'],
    'Seria A' : ['Ac Milan', 'Lazio', 'Juventus','Verona'],
    'Premiere League': ['Liverpool', 'Chelsea', 'Arsenal','Bringthon'],
    'Turkish Super League': ['Galatasaray', 'Beşiktaş', 'Fenerbahçe','Trabzon']
},

details = ['History','Stadium','News','Roster'],

rosters = {
    'Barcelona' : [
        {
            name:'Sergio Ramos' ,
            pictureUrl:'',
            jerseyNumber: 4,
            age: 24
        },
        {
            name:'Lionel Messi' ,
            pictureUrl:'',
            jerseyNumber: 10,
            age: 27
        },
        {
            name:'Ansu Fati' ,
            pictureUrl:'https://tmssl.akamaized.net/images/portrait/header/466810-1560761660.jpg',
            jerseyNumber: 20,
            age : 23
        },
        {
            name:'Jordi Abla' ,
            pictureUrl:'https://tmssl.akamaized.net/images/portrait/header/466810-1560761660.jpg',
            jerseyNumber: 12,
            age: 25
        },        {
            name:'Samuel Umtiti' ,
            pictureUrl:'https://tmssl.akamaized.net/images/portrait/header/466810-1560761660.jpg',
            jerseyNumber: 7,
            age: 24
        },
        {
            name:'Requi Pugi' ,
            pictureUrl:'https://tmssl.akamaized.net/images/portrait/header/466810-1560761660.jpg',
            jerseyNumber: 8,
            age: 27
        },
        {
            name:'Norberto Murara' ,
            pictureUrl:'',
            jerseyNumber: 6,
            age : 23
        }
    ],
    'allOthers': [ // Selected from The Best 11 Players In The World List.
               {
            name:'Jan Oblak' ,
            pictureUrl:'',
            jerseyNumber: 1,
            age: 20
        },
        {
            name:'A. Arnold' ,
            pictureUrl:'https://tmssl.akamaized.net/images/portrait/header/466810-1560761660.jpg',
            jerseyNumber: 2,
            age: 21
        },
        {
            name:'Van Dijk' ,
            pictureUrl:'https://tmssl.akamaized.net/images/portrait/header/466810-1560761660.jpg',
            jerseyNumber: 3,
            age : 22
        },
        {
            name:'Skriniar' ,
            pictureUrl:'',
            jerseyNumber: 4,
            age: 23
        },        
        {
            name:'A Robertson' ,
            pictureUrl:'https://tmssl.akamaized.net/images/portrait/header/466810-1560761660.jpg',
            jerseyNumber: 5,
            age: 24
        },
        {
            name:'Van De Beek' ,
            pictureUrl:'',
            jerseyNumber: 6,
            age: 25
        },
        {
            name:'Neymar' ,
            pictureUrl:'https://tmssl.akamaized.net/images/portrait/header/466810-1560761660.jpg',
            jerseyNumber: 7,
            age : 26
        },
        {
            name:'Mbappe' ,
            pictureUrl:'',
            jerseyNumber: 8,
            age: 27
        }
    ]
}


const appController = {
    init: function ({leagues: l, teams: t,details : d, rosters: r}){
        this.data.leagues = l;
        this.data.teams = t;
        this.data.details = d;
        this.data.rosters = r;
        self = this
    },
    onload: function (){
        self.domKeys = {
            appWrapper : this.app.find('.app-wrapper'),
        }
        self.functions.createTournamentView();
        self.eventBinding();
    },
    app : $('#app'),
    data: {
        position : {
            1: 'pos-t',
            2: 'pos-l',
            3: 'pos-b',
            4: 'pos-r'
        },
        viewLevels:{
            0 : 'tournament',
            1 : 'league',
            2 : 'team',
            3 : 'detail',
            4 : 'roster',
            5 : 'rosterDetail'
        },
        viewState : 0,
        selectedLeague:'',
        selectedTeam:'',
    },
    functions: {
        createPrimaryCircle(text,level){
            $(self.templates.circle('primary',text,level)).appendTo(self.domKeys.appWrapper);
        },
        createSecondaryCircle(text,level){
            let positionId = self.app.find('.circle').length;
            let position = self.data.position[positionId]
            $(self.templates.circle(position,text,level)).appendTo(self.domKeys.appWrapper);
        },
        createTournamentView(){
            this.changeView();
            $(self.functions.createPrimaryCircle('EUROPE SOCCER LEAGUE',0))
                .appendTo(self.domKeys.appWrapper);

            self.data.leagues.forEach(item=>{
                $(self.functions.createSecondaryCircle(item,1))
                .appendTo(self.domKeys.appWrapper)
            })
        },
        createLeagueView(text){
            self.data.teams[text].forEach(item => {
                $(self.functions.createSecondaryCircle(item, 2))
                .appendTo(self.domKeys.appWrapper)
            }) 
        },
        createTeamView(text){
            self.data.details.forEach(item=>{
                $(self.functions.createSecondaryCircle(item, 3))
                .appendTo(self.domKeys.appWrapper)
            }) 
        },
        createRosterView(team){
            $(self.templates.roster(team))
            .appendTo(self.domKeys.appWrapper)
        },
        createRosterDetailView(team){
            $(self.templates.rosterDetail(team))
            .appendTo(self.domKeys.appWrapper)
        },
        selectLeague(text){
            self.functions.changeView(text);
            self.functions.createLeagueView(text)
        },
        selectTeam(text){
            self.functions.changeView(text);
            self.functions.createTeamView(text)        
        },
        selectTeamRoster(text){
            let team =  self.data.selectedTeam == 'Barcelona'? 'Barcelona' : 'allOthers'
            self.functions.changeView(text);
            self.functions.createRosterView(self.data.rosters[team])
        },
        selectRosterDetail(text){
            let team =  self.data.selectedTeam == 'Barcelona'? 'Barcelona' : 'allOthers'
            self.functions.changeView(text);
            self.functions.createRosterDetailView(self.data.rosters[team])
        },
        changeView(text){
            self.app.find(`.circle`).each(function(){
                if($(this).text().trim() != text ) {
                    $(this).remove();
                }else{
                    $(this).addClass('primary')
                }
            });
        }
    },
    templates : {
        circle(type,text,level){
            return`
            <div class="circle ${type}" data-level="${level}">
                <span>
                    ${text}  
                </span>
            </div>
            `
        },
        roster(list){
            let result = $(`<div class="player-list"></div>`);
            result.append(
                list.map(({jerseyNumber,name})=>{
                    return` 
                        <div class="player" data-id="${jerseyNumber}">${name}</div>
                    `
                }).join('')
            )
            return result;
        },
        rosterDetail(list){
            let dummyImageUrl ='https://via.placeholder.com/40x50.png'
            let result = $(`<div class="list"></div>`);
            let headers = $(`
                <div class='header-column'>
                    <div>Picture</div>
                    <div>#</div>
                    <div>Name</div>
                    <div>Age</div>
                </div>
                
            `)
            result.append(headers);
            result.append(
                list.map(({jerseyNumber,name,age,pictureUrl})=>{
                    return`
                        <div class='player-item'>
                            <div class='image'>
                                <img src='${pictureUrl ? pictureUrl: dummyImageUrl}'></img>
                            </div>
                            <div>${jerseyNumber}</div>
                            <div>${name}</div>
                            <div>${age}</div>

                        </div>
                    `
                }).join('')
            )
            return result;
        }
    },
    eventHandlers:{ 
        select : (e)=>{
            let level = $(e.currentTarget).data('level');
            let text = $(e.currentTarget).text().trim()

            if(level == 0 ) return

            if(level > self.data.viewState){
                self.data.viewState = level
                switch(level){
                    case 1:
                        self.data.selectedLeague = text
                        self.functions.selectLeague(text) 
                        break;
                    case 2:
                        self.data.selectedTeam = text
                        self.functions.selectTeam(text)
                        break;
                    case 3:
                        if(text.toLowerCase() == 'Roster'.toLowerCase()){
                            self.functions.selectTeamRoster(text)
                            self.app.find('.primary')
                            .addClass('left')
                            .data('level',4)
                        }
                        break;
                    case 4:
                        self.app.find('.primary')
                            .addClass('top small')
                            .data('level',5)
                        self.app.find('.player-list').remove();
                        self.functions.selectRosterDetail(text) 
                        break;
                    case 5: 
                        self.data.viewState = 2
                        self.app.find('.list').remove();
                        self.app.find('.primary').remove();
                        self.functions.createPrimaryCircle(self.data.selectedTeam , self.data.viewState)
                        self.functions.selectTeam(self.data.selectedTeam)
                        break;
                }
            }else{
                self.data.viewState = level - 1;
                switch(level){
                    case 1:
                        self.data.selectedLeague = ''
                        self.functions.createTournamentView();
                        break;
                    case 2:
                        self.data.selectedTeam = ''
                        self.functions.createPrimaryCircle(self.data.selectedLeague, self.data.viewState)
                        self.functions.selectLeague(self.data.selectedLeague)
                        break;
                }
            }     
        },
    },
    eventBinding: function(){
        self.app.on('click','.circle', self.eventHandlers.select)
    }
}

// Controller Initiated
appController.init({leagues, teams, details, rosters})
$(document).ready(()=>{
    appController.onload();
})