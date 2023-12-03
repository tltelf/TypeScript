"use strict";
class Contoller {
    handleWithLogs(req) {
        console.log('Start');
        this.handle(req);
        console.log('End');
    }
}
/* @internal */
class UserController extends Contoller {
    handle(req) {
        console.log(req);
    }
}
// new Contoller() - error
const c = new UserController();
c.handleWithLogs('Request');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxNQUFlLFNBQVM7SUFHdkIsY0FBYyxDQUFDLEdBQVE7UUFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDcEIsQ0FBQztDQUNEO0FBQ0QsZUFBZTtBQUNmLE1BQU0sY0FBZSxTQUFRLFNBQVM7SUFDckMsTUFBTSxDQUFDLEdBQVE7UUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2xCLENBQUM7Q0FDRDtBQUVELDBCQUEwQjtBQUMxQixNQUFNLENBQUMsR0FBRyxJQUFJLGNBQWMsRUFBRSxDQUFDO0FBQy9CLENBQUMsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMifQ==