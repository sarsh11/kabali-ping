'use strict'

let _callers = {
    BookMyShow: 'BookMyShow',
    TicketNew: 'TicketNew'
}

let _options = {}
_options[_callers.BookMyShow] = {
    method: 'GET',
    url: 'https://in.bookmyshow.com/serv/getData',
    qs:
    {
        cmd: 'QUICKBOOK',
        type: 'MT',
        getRecommendedData: '1',
        _: '1468652879819'
    },
    headers:
    {
        'postman-token': '46f9aa3b-38e2-7ada-679e-88febb7dd1d8',
        'cache-control': 'no-cache',
        connection: 'keep-alive',
        'x-requested-with': 'XMLHttpRequest',
        accept: 'application/json, text/javascript, */*; q=0.01',
        'user-agent': 'Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36',
        'accept-language': 'en-US,en;q=0.8',
        cookie: 'PHPSESSID=h1414gom7itg28nv8afitpb6g6; tvc_vid=21468652511066; ci_id=fa92ef58-4a1a-4457-a58e-t155f282e1c9-b1fb6c10eec3; _gat=1; _gat_UA-2360082-1=1; langDisp=true; _dc_gtm_UA-27207583-8=1; _dc_gtm_UA-2360082-1=1; _gat_UA-27207583-8=1; Rgn=%7CCode%3DCHEN%7Ctext%3DChennai%7C; tvc_movies_sq=; _vwo_uuid_v2=4056649C3D23A733246D45ECAE34A6AD|bdd76a95ea8b7a1f4614fd84a0385298; userCine=%7Cpop%3DJACM%3BAGSN%3BMAYJ%3BPVVL%3BAGST%3BINCH%3BFMCN%3BAGSC%3BABIC%3BCASI%3BTGWO%3BSVTC%3BRSSC%3BSKMA%3BMTDC%3BROHN%7Cmrs%3DROHN%3B%7C; WZRK_P=https%3A%2F%2Fin.bookmyshow.com%2Fbuytickets%2Fkizhakku-chandu-kadhavu-en-108-chennai%2Fmovie-chen-ET00043983-MT%2F20160718; WZRK_G=cb15312109ad4b85b173c36a0f9ee1d0; WZRK_S_RK4-47R-98KZ=%7B%22p%22%3A7%2C%22s%22%3A1468652519%2C%22t%22%3A1468652881%7D; _ga=GA1.2.341990763.1468652512; _ga=GA1.3.341990763.1468652512; tvc_bmscookie=GA1.3.341990763.1468652512; preferredLanguages=%7CemailID%3D%7Clanguages%3D%7C'
    }
}
_options[_callers.TicketNew] = {
    method: 'POST',
    url: 'http://www.ticketnew.com/onlinetheatre/online-movie-ticket-booking/GetJsonDataForMoviePage.asmx/GetScheduleDates_MovieId_RegionIds',
    headers:
    {
        'cache-control': 'no-cache',
        'content-type': 'application/json'
    },
    body: { MovieId: 12188, RegionIds: '1' },
    json: true
}

module.exports  = {
    _callers, _options
}