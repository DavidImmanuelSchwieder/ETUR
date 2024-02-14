export class Report{
    constructor(
        id, category, customerId, description, labels = [], owner, 
        assignedTo, createdAt, priority, comments = [], references = []
    ){
        this.id = id;
        this.category = category;
        this.customerId = customerId;
        this.description = description;
        this.labels = labels;
        this.owner = owner;
        this.assignedTo = assignedTo;
        this.createdAt = createdAt;
        this.editedAt = createdAt;
        this.closedAt = null;
        this.state = "Open";
        this.priority = priority;
        this.comments = comments;
        this.closeReason = "";
        this.references = references;
    }
}
export function getReports(){
    return reports;
}
const reports = []
export function createReport(reportId,category,customerId,description,labels,owner,state,assignedTo,createdAt,priority,comments,references){

    const tempReport = new Report(reportId,category,customerId,description,labels,owner,assignedTo,createdAt,priority,comments,references)
    tempReport.reportdId = reportId
    tempReport.category = category
    tempReport.customerId = customerId
    tempReport.description = description
    tempReport.labels = labels
    tempReport.owner = owner
    tempReport.assignedTo = ""
    tempReport.createdAt = Date.now()
    tempReport.editedAt = Date.now()
    tempReport.closedAt = ""
    tempReport.state = state
    tempReport.priority = ""
    tempReport.comments = ""
    tempReport.closeReason = ""
    tempReport.references = ""
    reports.push(tempReport);

}
export async function routesReport(fastify, options) {
    fastify.get('/reports', async (request, reply) => {
        const reports = getReports();
        return { reports }
    });
    fastify.get('/reports/:id', async (request, reply) => {
     
    });
    fastify.post('/reports',  async (request, reply) => {
    
        const response = createReport("90101","Feedback","ETUR-CN-32623","This Is a Description","Label","My self","Amerika")
        return { response }
    });
}