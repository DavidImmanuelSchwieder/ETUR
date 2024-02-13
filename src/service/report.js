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