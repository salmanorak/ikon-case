
const appController = {
    init: function ({leagues: l, teams: t,details : d, roasters: r}){
        this.data.leagues = l;
        this.data.teams = t;
        this.data.details = d;
        this.data.roasters = r;
    },
    onload: function (){
        this.domKeys = {
        }
        this.eventBinding();
    },
    app : $('#app'),
    data: {
    },
    functions: {
        getData:()=>{
        }
    },
    templates : {
    },
    eventHandlers:{
        select : (e)=>{
        },
    },
    eventBinding: function(){
        this.app.on('click','.item', this.eventHandlers.select)
    }
}

// Controller Initiated
appController.init({leagues, teams,details, roasters})
$(document).ready(()=>{
    appController.onload();
})

// Data
var leagues = ['Laliga', 'Seria A', 'Premiere League','Turkish Super League']

var teams = {
    'Laliga' : ['Barcelona','Real Madrid', 'Atletico Madrid'],
    'Seria A' : ['Ac Milan', 'Lazio', 'Juventus'],
    'Premiere League': ['Liverpool', 'Chelsea', 'Arsenal'],
    'Turkish Super League': ['Galatasaray', 'Beşiktaş', 'Fenerbahçe']
}

var details= ['History','Stadium','News','Roster']
var roasters = {
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
            pictureUrl:'',
            jerseyNumber: 12
        },        {
            name:'Samuel Umtiti' ,
            pictureUrl:'',
            jerseyNumber: 7,
            age: 24
        },
        {
            name:'Requi Pugi' ,
            pictureUrl:'',
            jerseyNumber: 8,
            age: 27
        },
        {
            name:'Norberto Murara' ,
            pictureUrl:'',
            jerseyNumber: 6,
            age : 23
        },
        {
            name:'Dansel Washington' ,
            pictureUrl:'',
            jerseyNumber: 2,
            age: 45
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
            pictureUrl:'',
            jerseyNumber: 2,
            age: 21
        },
        {
            name:'Van Dijk' ,
            pictureUrl:'',
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
            pictureUrl:'',
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
            pictureUrl:'',
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