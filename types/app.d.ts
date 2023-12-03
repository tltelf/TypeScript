declare abstract class Contoller {
    abstract handle(req: any): void;
    handleWithLogs(req: any): void;
}
declare const c: UserController;
