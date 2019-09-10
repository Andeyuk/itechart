
export class DateFormatter extends Date{
    constructor(dateStr, format, toFormat){

        let matchedWord = dateStr.match(/[a-zA-Z]+/);

        //handle numbers, not valid args and Month names to Date
        if (!dateStr.length || matchedWord) {
            let defaultSuper = super(dateStr);

            initProps.apply(this);

            return defaultSuper;
        }

        //default format
        if (!format){
            let separator = dateStr.match(/[^a-zA-Z0-9]/) || '';
            format = `DD${separator}MM${separator}YYYY`
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

        let _super = super(...values)

        initProps.apply(this);
            
        return _super;

        //helper-block

            function getValue(matched, dateStr){
                let val = dateStr.toString().slice(
                    matched.index,
                    matched.index + matched[0].length
                );
                return val;
            }

            function getMonthFixer(func){
                return function getMonth(){
                    if(func.incremented != true){
                        func.incremented = true;
                        return func.apply(this) + 1;
                    }
                    return func.apply(this);
                }
            }

            function initProps(){
                this.toFormat = toFormat;
                this.constructor.prototype.getMonth = getMonthFixer(this.getMonth); //Date indicates month from 0, but task requares from 1
            }
    }

    getFullDate(separator = ' '){
        let date = [
            this.getDate(),
            this.getFormattedMonth(),
            this.getFullYear()
        ]

        return date.join(separator);
    }

    getFormattedDate() {
        let day = this.getDate().toString().length == 1 ? '0' + this.getDate() : this.getDate();
        let month = this.getMonth().toString().length == 1 ? '0' + (this.getMonth() + 1) : (this.getMonth() + 1);

        if (this.toFormat)
            return this.toFormat
                        .replace(/Y+/, this.getFullYear())
                        .replace(/D+/, day)
                        .replace(/M+/, month);

        return `${this.getDate()} ${this.getFormattedMonth()} ${this.getFullYear()}`
    }

    getFormattedDay(){
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        return  days[this.getDay()]
    }

    getFormattedMonth(){
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        return months[this.getMonth()];
    }

    fromNow(){
        let curDate = new Date();
        let hasDate = this;
        let diff = new Date(curDate - hasDate);

        let diffYear = diff.getFullYear() - 1970;

        let diffProps = [
            DiffProp(diffYear, 'years'),
            DiffProp(diff.getMonth(), 'month'),
            DiffProp(diff.getDate(), 'days'),
        ]

        let diffStrs = diffProps.map(el=>diffTostr(el.val, el.descr));

        return  diffYear > 0 ? diffStrs.join(' ') + ' ago' : diffStrs.join(' ');


        //helper-block

            function diffTostr(diffPar, discription){
                if (diffPar > 0)
                    return  diffPar + ' ' + discription;

                if (diffPar < 0)
                    return  -diffPar + ' ' + discription;
                    
                return ''
            }

            function DiffProp(val, descr){
                return {val, descr};
            }
    }
}

