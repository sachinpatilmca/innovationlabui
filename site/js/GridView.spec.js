import render from './GridView';

describe ('render',()=>{
    it('should update dom',()=>{
        const result=render([{name: "usdjpy",bestBid: 106.7297012204255,bestAsk: 107.25199883791178,openBid: 107.22827132623534,openAsk: 109.78172867376465,lastChangeAsk: -4.862314256927661,lastChangeBid: -2.8769211401569663}]);
        expect(result).tobe(0);
    })
})