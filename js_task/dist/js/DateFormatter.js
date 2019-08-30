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

            let matchedYear = regStr.match(/Y+/);
            let matchedDay = regStr.match(/D+/);
            let matchedMonth = regStr.match(/M+/);

            let matched = [matchedYear, matchedDay, matchedMonth];

            let values = [
                getValue(matchedYear),
                getValue(matchedDay),
                getValue(matchedMonth)
            ];

            if (convertRegStr)
                convertRegStr = formatDate(matched, convertRegStr);

            super(...values);
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
        function formatDate(matched, convertRegStr){
            let OrderedMatch = [...matched].sort((a,b) => a.index - b.index);
            for (let i of [...OrderedMatch]){
                let dateParam = getValue(i);
                convertRegStr = convertRegStr.replace(i[0], dateParam);
            }
            return convertRegStr
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
