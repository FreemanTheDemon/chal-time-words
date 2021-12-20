const timeWord = (str) => {
    let hoursMinutes = str.split(':');
    let hours = Number(hoursMinutes[0]);
    let hoursOrig = Number(hoursMinutes[0]);
    let minutes = Number(hoursMinutes[1]);

    let numNames = ['oh', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let tens = ['' ,'', 'twenty', 'thirty', 'fourty', 'fifty'];

    console.log(minutes);

    result = '';

    // accounts for noon and midnight
    if (hours === 12 && minutes === 0) {
        return 'noon';
    } else if (hours === 0 && minutes === 0) {
        return 'midnight';
    }

    // accounts for military
    if (hours >= 13) {
        hours = hours - 12;
    }

    // accounts for hours
    if (hours !== 0) {
        result += numNames[hours] + ' ';
    } else {
        result += numNames[12] + ' ';
    }

    // accounts for minutes
    if (minutes >= 20) {
        result += tens[Math.floor(minutes / 10)] + ' ';
        if (minutes % 10 !== 0) {
            result += numNames[minutes % 10] + ' ';
        }
    } else if (minutes === 0) {
        result += 'o\' clock ';
    } else if (minutes >= 10) {
        result += numNames[minutes] + ' ';
    } else {
        result += 'oh ' + numNames[minutes] + ' ';
    }

    // accounts for latin time stamps
    if (hoursOrig >= 12) {
        result += 'pm';
    } else {
        result += 'am';
    }

    console.log(result)
    return result;
}

timeWord("00:00")
// 'midnight'

timeWord("12:00")
// 'noon'

timeWord("01:00")
// "one o'clock am"

timeWord("06:01")
// 'six oh one am'

timeWord("06:10")
// 'six ten am'

timeWord("06:18")
// 'six eighteen am'

timeWord("06:30")
// 'six thirty am'

timeWord("10:34")
// 'ten thirty four am'

timeWord("00:12")
// 'twelve twelve am'

timeWord("12:09")
// 'twelve oh nine pm'

timeWord("23:23")
// 'eleven twenty three pm'