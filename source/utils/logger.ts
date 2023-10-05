import chalk from "chalk";
import moment from "moment";
import { name, version } from '../../package.json';

export default class Logger {

    private index(): string {
        return "[" + chalk.bold.red(moment().format("LT")) + "]" + name+"@"+version+" : ";
    }

    public send(content: string, statut: string) {
        switch(content.toUpperCase()) {
            case "ERROR":
                console.log(this.index() + chalk.bgRed('ERROR') + ">" + content);
            break;
            case "ALERT":
                console.log(this.index() + chalk.bgYellow('ALERT') + ">" + content);
            break;
            case "READY":
                console.log(this.index() + chalk.bgGreen('READY') + ">" + content);
            break;
            case "NOTIF":
                console.log(this.index() + chalk.bgCyan('NOTIF') + ">" + content);
            break;
        }
    }
}