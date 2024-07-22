import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";
import * as docker from "@pulumi/docker";
import * as postgresql from "postgresql";

// Create an ECS cluster
const cluster = new aws.ecs.Cluster("app-cluster");

// Create a task definition for the Nuxt.js container
const taskDefinition = new aws.ecs.TaskDefinition("app-task", {
    family: "app-task",
    networkMode: "awsvpc",
    requiresCompatibilities: ["FARGATE"],
    cpu: "256",
    memory: "512",
    containerDefinitions: JSON.stringify([{
        name: "nuxt",
        image: "nuxt:latest",
        essential: true,
        portMappings: [{
            containerPort: 3000,
            hostPort: 3000,
            protocol: "tcp",
        }],
    }]),
});

// Create a security group for the service
const securityGroup = new aws.ec2.SecurityGroup("web-sg", {
    description: "Allow HTTP traffic",
    ingress: [{
        protocol: "tcp",
        fromPort: 3000,
        toPort: 3000,
        cidrBlocks: ["0.0.0.0/0"],
    }],
});

// Create an ECS service to run the task definition
const service = new aws.ecs.Service("app-service", {
    cluster: cluster.id,
    taskDefinition: taskDefinition.arn,
    desiredCount: 1,
    launchType: "FARGATE",
    networkConfiguration: {
        subnets: [/* Add your subnet IDs here */],
        securityGroups: [securityGroup.id],
    },
});

// Create a PostgreSQL database
const db = new postgresql.Database("app-db", {
    name: "appdb",
    owner: "postgres",
    lcCtype: "en_US.UTF-8",
    encoding: "UTF8",
    template: "template0",
    lcCollate: "en_US.UTF-8",
    isTemplate: false,
    tablespaceName: "pg_default",
});

// Export the URLs
export const clusterName = cluster.name;
export const serviceName = service.name;
export const dbName = db.name;