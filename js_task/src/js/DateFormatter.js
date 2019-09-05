export class DateFormatter extends Date{
    constructor(dateStr, regStr, convertRegStr) {
        //case for numbers and not valid args
        if (!dateStr.length) return super(dateStr);

        if (!regStr){
            let separator = dateStr.match(/[^a-zA-Z0-9]/) || '-';
            console.log(separator);
            regStr = `MM${separator}DD${separator}YYYY`
        }

        console.log('regex',regStr);

        //year month day - ordered params for new Date()
        let matched = [
            regStr.match(/Y+/), 
            regStr.match(/M+/),
            regStr.match(/D+/)
        ];

        let values = matched.map(
            el =>{
                if (el[0] == "MM") 
                    return getValue(el, dateStr) - 1;
                return getValue(el, dateStr);
            }
        )

        console.log(values);
        console.log(matched);
        if (convertRegStr){
            convertRegStr = formatDate(matched, convertRegStr, dateStr);
        }

        dateStr = dateStr.toString();

        let matchedWord = dateStr.match(/[a-zA-Z]+/);

        //don't realy want to deal with month names
        if(matchedWord){
            console.log('word detected', matchedWord);

            return super(dateStr);
        }

        dateStr = dateStr.match(/\d+/g);
        console.log(dateStr)

        //length 1 => no separator
        if (dateStr.length == 1){
            console.log('reg work');


            console.log('parsed vals', ...values);

            super(...values);
            this.formattedDate = convertRegStr;

        } else {

            if (dateStr.length > 3) {
                super(...dateStr)
            } else {
                super(...values);
                this.formattedDate = convertRegStr;
            }
        }

        function getValue(matched, dateStr){
            let val = dateStr.toString().slice(
                matched.index,
                matched.index + matched[0].length
            );
            return val;
        }

        function formatDate(matched, convertRegStr, dateStr){
            let OrderedMatch = [...matched].sort((a,b) => a.index - b.index);
            for (let i of [...OrderedMatch]){
                let dateParam = getValue(i, dateStr);
                convertRegStr = convertRegStr.replace(i[0], dateParam);
            }
            return convertRegStr
        }
    }

    getFormattedMonth(){
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        return months[this.getMonth()];
    }

    getStringDate() {
        if (this.formattedDate)
            return this.formattedDate;
        return `${this.getFullYear()}-${this.getMonth()}-${this.getDate()}`;
    }

    getFormattedDate() {
            return `${this.getDate()} ${this.getFormattedMonth()} ${this.getFullYear()}`
    }

    getFormattedDay(){
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        return  days[this.getUTCDay()]
    }
}
