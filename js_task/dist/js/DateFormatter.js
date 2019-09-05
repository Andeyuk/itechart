class DateFormatter extends Date{
    constructor(dateStr, format, toFormat) {

        let _super = super(dateStr);

        //case for numbers and not valid args
        if (!dateStr.length) {
            this.formattedDate = toFormat;
            return _super;
        }

        let matchedWord = dateStr.match(/[a-zA-Z]+/);

        //don't realy want to deal with month names
        if(matchedWord){
            this.formattedDate = toFormat;
            return _super;
        }

        //default format
        if (!format){
            let separator = dateStr.match(/[^a-zA-Z0-9]/) || '-';
            format = `MM${separator}DD${separator}YYYY`
        }

        //year month day - ordered params for new Date()
        let matched = [
            format.match(/Y+/), 
            format.match(/M+/),
            format.match(/D+/)
        ];

        let values = matched.map(
            el =>{
                if (el[0] == "MM") 
                    return getValue(el, dateStr) - 1;
                return getValue(el, dateStr);
            }
        )

        if (toFormat){
            toFormat = formatDate(matched, toFormat, dateStr);
        }

        dateStr = dateStr.toString();
        dateStr = dateStr.match(/\d+/g);

        //length 1 => no separator
        if (dateStr.length == 1){

            super(...values);
            this.formattedDate = toFormat;

        } else {

            if (dateStr.length > 3) {
                super(...dateStr)
            } else {
                super(...values);
                this.formattedDate = toFormat;
            }
        }

        function getValue(matched, dateStr){
            let val = dateStr.toString().slice(
                matched.index,
                matched.index + matched[0].length
            );
            return val;
        }

        function formatDate(matched, toFormat, dateStr){
            let OrderedMatch = [...matched].sort((a,b) => a.index - b.index);
            for (let i of [...OrderedMatch]){
                let dateParam = getValue(i, dateStr);
                toFormat = toFormat.replace(i[0], dateParam);
            }
            return toFormat
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


class Df extends Date{
    constructor(dateStr, format, toFormat){

        let matchedWord = dateStr.match(/[a-zA-Z]+/);

        //handle numbers, not valid args and Month names to Date
        if (!dateStr.length || matchedWord) {
            let defaultSuper = super(dateStr);

            this.toFormat = toFormat;
            this.constructor.prototype.getMonth = plusOneDecorator(this.getMonth); //Date indicates month from 0, but task requares from 1

            return defaultSuper;
        }

        //default format
        if (!format){
            let separator = dateStr.match(/[^a-zA-Z0-9]/) || '-';
            format = `MM${separator}DD${separator}YYYY`
        }

        //parse format
        let matched = [
            format.match(/Y+/), 
            format.match(/M+/),
            format.match(/D+/)
        ];

        let values = matched.map(
                        el =>{
                if (el[0] == "MM") 
                    return getValue(el, dateStr) - 1;
                return getValue(el, dateStr);
            }
        )

        dateStr = dateStr.toString();
        dateStr = dateStr.match(/\d+/g);

        //length 1 => no separator
        if (dateStr.length == 1){
            let _super = super(...values)

            this.toFormat = toFormat;
            this.constructor.prototype.getMonth = plusOneDecorator(this.getMonth); //Date indicates month from 0, but task requares from 1

            return _super;
        }

        let _super = super(...dateStr)

        this.toFormat = toFormat;
        this.constructor.prototype.getMonth = plusOneDecorator(this.getMonth); //Date indicates month from 0, but task requares from 1

        return _super;

        function getValue(matched, dateStr){
            let val = dateStr.toString().slice(
                matched.index,
                matched.index + matched[0].length
            );
            return val;
        }

        function plusOneDecorator(func){
            return function(){
                return func.apply(this) + 1;
            }
        }

    }
    getFormattedDate() {
        if (this.toFormat)
        return this.toFormat
                    .replace(/Y+/,this.getFullYear())
                    .replace(/D+/,(this.getDate().toString().length == 1) ? ('0' + this.getDate()) : this.getDate())
                    .replace(/M+/,(this.getMonth().toString().length == 1) ? ('0' + this.getMonth()) : this.getMonth())
        return `${this.getFormattedDay()}, ${this.getDay()} ${this.getFormattedMonth()} ${this.getFullYear()}`
    }
    getFormattedDay(){
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        return  days[this.getDay()]
    }
    getFormattedMonth(){
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        return months[this.getMonth() - 1];
    }
}

let x = new Df("20130430","YYYYMMDD", "YYYY-MM-DD");
console.log(x.getMonth());