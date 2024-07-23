import * as pulumi from "@pulumi/pulumi";
import * as docker from "@pulumi/docker";
import * as postgresql from "@pulumi/postgresql";

// Create a PostgreSQL database
const db = new postgresql.Database("mydatabase", {
    name: "mydatabase",
    owner: "myuser",
    lcCtype: "en_US.UTF-8",
    encoding: "UTF8",
    template: "template0",
    lcCollate: "en_US.UTF-8",
    isTemplate: false,
    tablespaceName: "pg_default",
    connectionLimit: -1,
    allowConnections: true,
});

// Create a Docker network
const network = new docker.Network("my-network", {});

// Build and publish the Nuxt.js Docker image
const imageName = "my-nuxt-app";
const nuxtImage = new docker.Image(imageName, {
    build: {
        context: "../app",
    },
    imageName: pulumi.interpolate`${imageName}:v1.0.0`,
});

// Run the Nuxt.js container
const nuxtContainer = new docker.Container("nuxt-container", {
    image: nuxtImage.imageName,
    networksAdvanced: [{ name: network.name }],
    ports: [{
        internal: 3000,
        external: 3000,
    }],
    envs: [
        pulumi.interpolate`DATABASE_URL=postgresql://myuser:mypassword@${db.endpoint}:5432/mydatabase`,
    ],
});

export const nuxtUrl = pulumi.interpolate`http://${nuxtContainer.name}:3000`;
