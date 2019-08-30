class DateFormatter extends Date{
    constructor(dateStr, regStr, convertRegStr) {
        if (!dateStr.length) return super(dateStr);

        console.log('nun detected',dateStr);
        dateStr = dateStr.toString();

        let matchedWord = dateStr.match(/\W+/);

        if(matchedWord){
            console.log('word detected',matchedWord);
            return super(dateStr);
        }

        dateStr = dateStr.match(/\d+/g);
        console.log(dateStr)
        if (dateStr.length == 1){
            if (!regStr) regStr = "MMDDYYYY";
            console.log('reg work');

            let matched = [];
            let vaues = [];
            
            matched.push(regStr.match(/Y+/));
            matched.push(regStr.match(/D+/));
            matched.push(regStr.match(/M+/));

           
            if (convertRegStr){
                for (let i of [...OrderedMatch]){
                    let dateParam = getValue(i);
                    convertRegStr = convertRegStr.replace(i[0], dateParam);
                }
                let OrderedMatch= [...matched].sort((a,b) => a.index - b.index);
            }

            let [year, day, month] = [...matched];

            super(year, day, month);
            this.formatted = convertRegStr;
        } else {
            if (!regStr) regStr = "MM/DD/YYYY";
            
        }
        /*if (!regStr && dateStr.toString().length > 8)
            super(dateStr);
        else {
            if (!regStr) {
                dateStr =  dateStr.toString().match(/\d+/g);
                console.log(dateStr);
            }
            
            
        }*/
        function getValue(matched){
            let val = dateStr.toString().slice(
                matched.index,
                matched.index + matched[0].length
            );
            return val;
        }

        function getIndex(match){
            return regStr.match(match).index;
        }
        function getParams(...matches){
            let reslts = [];
            for (let i of [...matches])
                reslts.push(getDateParam(i));
            return reslts
        }
    }
   /* getYear(){
        return parseInt(this.year);
    }
    getDay(){
        return parseInt(this.day);
    }
    getMonth(){
        return parseInt(this.month);
    }
    getStrMonth(){
        return this.month;
    }
    getFormattedMonth(){
        let month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        return month[parseInt(this.month - 1)];
    }
    getDate() {
        return `${this.getStrMonth()}-${this.getDay()}-${this.getYear()}`;
    }
    getFormattedDate() {
        return `${this.getFormattedMonth()} ${this.getDay()} ${this.getYear()}`;
    }*/
}
