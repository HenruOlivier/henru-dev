import { Component } from '@angular/core';
import { TypingEffectDirective } from '../../shared/directives/typingEffect';
import { ToggleInViewDirective } from '../../shared/directives/toggleInViewClass';
import { ProjectCardComponent } from '../../shared/components/project-card/project-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, TypingEffectDirective, ToggleInViewDirective, ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  projects: {heading: string, description: string, bulletPoints: string[], icons: {src: string, alt: string}[]}[] = [
    {
      heading: "Dynamic IoT Sensor Management System",
      description: "Developed an IoT system on custom hardware capable of receiving messages from a wide range of sensors and transforming the data as necessary. The system visualizes data using Grafana for graphs and custom cards for live data. The interface allows for creating sensor calibration data, grouping sensors to create averages, and managing sensors dynamically with plug-and-play functionality. Cloud sync is implemented, and the system is designed with a microservice architecture, utilizing a custom component library.",
      bulletPoints: [
        "Technologies used: Angular, Node.js, Express, CouchDB, Redis, Kafka, PM2, Ansible, Docker, Grafana, InfluxDB, Nginx.",
        "Developed plug-and-play sensor plugins for both frontend and backend, enhancing system flexibility and scalability.",
        "Implemented real-time data visualization and monitoring with Grafana and custom data cards.",
        "Designed a user-friendly interface for sensor calibration and management, supporting dynamic addition and removal of sensors.",
        "Utilized a microservice architecture to ensure scalability and maintainability of the system.",
        "Ensured reliable cloud synchronization for data redundancy and accessibility."
      ],
      icons: [
        {src: "assets/icons/angular.svg", alt: "Angular"},
        {src: "assets/icons/nodejs.svg", alt: "Node.js"},
        {src: "assets/icons/express.svg", alt: "Express"},
        {src: "assets/icons/influxdb.svg", alt: "Influx"},
        {src: "assets/icons/redis.svg", alt: "Redis"},
        {src: "assets/icons/grafana.svg", alt: "Grafana"},
        {src: "assets/icons/couchdb.svg", alt: "CouchDB"},
        {src: "assets/icons/socketdotio.svg", alt: "Socket.IO"},
        {src: "assets/icons/ansible.svg", alt: "Ansible"},
        {src: "assets/icons/kafka.svg", alt: "Kafka"},
        {src: "assets/icons/pm2.svg", alt: "PM2"},
        {src: "assets/icons/nginx.svg", alt: "NGINX"},
      ]
    },
    {
      heading: "International E-Commerce Admin CMS",
      description: "Architected an admin CMS for managing global e-commerce operations, including dynamic content management, pricing adjustments, and inventory control for different countries. The system includes role-based access controls to manage administrative privileges and security.",
      bulletPoints: [
        "Technologies used: Angular, Node.js, Express, MongoDB, Redis, InfluxDB, RabbitMQ, Docker, Stripe API, Angular Material, Tailwind, Nginx.",
        "Developed a dynamic content management system that allows administrators to modify product details, pricing, and availability for each country.",
        "Configured role-based access control to ensure that administrators have appropriate permissions based on their roles, increasing system security and operational efficiency.",
        "Integrated Stripe for processing payments, with robust backend integrations to handle multi-currency transactions and financial reconciliations."
      ],
      icons: [
        {src: "assets/icons/angular.svg", alt: "Angular"},
        {src: "assets/icons/nodejs.svg", alt: "Node.js"},
        {src: "assets/icons/express.svg", alt: "Express"},
        {src: "assets/icons/mongodb.svg", alt: "MongoDB"},
        {src: "assets/icons/redis.svg", alt: "Redis"},
        {src: "assets/icons/influxdb.svg", alt: "InfluxDB"},
        {src: "assets/icons/rabbitmq.svg", alt: "RabbitMQ"},
        {src: "assets/icons/docker.svg", alt: "Docker"},
        {src: "assets/icons/stripe.svg", alt: "Stripe"},
        {src: "assets/icons/angularmaterial.svg", alt: "Angular Material"},
        {src: "assets/icons/tailwindcss.svg", alt: "Tailwind"},
        {src: "assets/icons/nginx.svg", alt: "NGINX"},
      ]
    },
    {
      heading: "Moisture Management System for Nurseries",
      description: "Developed an IoT-based system to monitor and manage the moisture levels of plants in nurseries using LoRa-enabled scales. The system processes raw data to calculate accurate moisture levels, which are displayed on a user-friendly frontend. Administrators can manage scale settings, group assignments, and view detailed analytics for informed decision-making.",
      bulletPoints: [
        "Technologies used: Angular, Node.js, Express, InfluxDB, Redis, Grafana, CouchDB, Socket.IO, Ansible, Nginx.",
        "Engineered a data processing pipeline that aggregates and analyzes time-series data from multiple IoT devices",
        "Utilized Grafana for real-time data visualization, enhancing operational insights for nursery managers.",
        "Employed Ansible to automate environment setup, frontend compilation, and deployment, ensuring consistent and reliable deployments on OrangePi devices."
      ],
      icons: [
        {src: "assets/icons/angular.svg", alt: "Angular"},
        {src: "assets/icons/nodejs.svg", alt: "Node.js"},
        {src: "assets/icons/express.svg", alt: "Express"},
        {src: "assets/icons/influxdb.svg", alt: "Influx"},
        {src: "assets/icons/redis.svg", alt: "Redis"},
        {src: "assets/icons/grafana.svg", alt: "Grafana"},
        {src: "assets/icons/couchdb.svg", alt: "CouchDB"},
        {src: "assets/icons/socketdotio.svg", alt: "Socket.IO"},
        {src: "assets/icons/ansible.svg", alt: "Ansible"},
        {src: "assets/icons/nginx.svg", alt: "NGINX"},
      ]
    },
    {
      heading: "International E-Commerce Client Shop",
      description: "Developed a client-facing e-commerce shop designed to cater to a global audience. This platform dynamically adjusts product pricing and availability based on the customer's location, detected via IP address. It features real-time currency conversion and localized shipping options, enhancing the shopping experience for international customers.",
      bulletPoints: [
        "Technologies used: Angular, Node.js, Express, MongoDB, Redis, InfluxDB, Stripe, Docker, Angular MAterial, Tailwind, Nginx.",
        "Integrated a currency API to automatically update currency rates and pricing based on the latest exchange rates stored in Redis.",
        "Implemented a geo-location feature to tailor content, including pricing and shipping options, to the user’s location, enhancing user engagement and satisfaction.",
        "Used Docker to ensure a scalable and reliable deployment across various geographic regions."
      ],
      icons: [
        {src: "assets/icons/angular.svg", alt: "Angular"},
        {src: "assets/icons/nodejs.svg", alt: "Node.js"},
        {src: "assets/icons/express.svg", alt: "Express"},
        {src: "assets/icons/mongodb.svg", alt: "MongoDB"},
        {src: "assets/icons/redis.svg", alt: "Redis"},
        {src: "assets/icons/influxdb.svg", alt: "InfluxDB"},
        {src: "assets/icons/stripe.svg", alt: "Stripe"},
        {src: "assets/icons/docker.svg", alt: "Docker"},
        {src: "assets/icons/angularmaterial.svg", alt: "Angular Material"},
        {src: "assets/icons/tailwindcss.svg", alt: "Tailwind"},
        {src: "assets/icons/nginx.svg", alt: "NGINX"},
      ]
    },
    {
      heading: "Warehouse Management System",
      description: "As part of my high school IT curriculum, I developed a warehouse management system for a nonprofit organization, aimed at improving the efficiency of food distribution across Africa. This project was my introduction to software development, where I utilized Delphi to create a robust desktop application that managed inventory, tracked delivery trucks, and handled financial transactions related to the distribution of bananas.",
      bulletPoints: [
        "Technologies used: Delphi, SQL",
        "Developed an intuitive user interface that allowed administrators to accurately track and manage stock levels, deliveries, and financial transactions.",
        "Implemented algorithms for calculating optimal delivery routes and schedules to maximize efficiency and reduce costs.",
        "Designed and implemented a database schema to store data securely and allow quick retrieval and updates of inventory and transaction records.",
        "The project not only honed my technical skills but also highlighted the importance of software solutions in solving real-world problems, particularly in the nonprofit sector."
      ],
      icons: [
        {src: "assets/icons/delphi.svg", alt: "Delphi"},
        {src: "assets/icons/firebase.svg", alt: "Firebase"}
      ]
    },
    {
      heading: "Wedding Invite Management App",
      description: "Designed and developed a dynamic wedding invitation application using Angular and Firebase, which streamlined the process of managing guest responses and preferences for a personal event. The application enabled guests to confirm their attendance, specify the number of additional guests (plus ones and children), and submit song requests, enhancing the event planning experience.",
      bulletPoints: [
        "Technologies used: Angular, Firebase, Nginx.",
        "Implemented an intuitive user interface that allowed guests to easily submit their attendance and preferences.",
        "Developed real-time updates and email notifications to keep the event hosts informed about guest responses.",
        "Created a dedicated admin page for hosts to view and manage all guest responses, ensuring efficient event management and planning."
      ],
      icons: [
        {src: "assets/icons/angular.svg", alt: "Angular"},
        {src: "assets/icons/firebase.svg", alt: "Firebase"},
        {src: "assets/icons/nginx.svg", alt: "NGINX"},
      ]
    },
    {
      heading: "Production Websites Development",
      description: "Developed and launched multiple websites that are actively used in production, each featuring robust Angular frontends, Express backends, and MongoDB databases. These sites are designed to facilitate client information collection and enable seamless communication between users and administrators through automated email notifications.",
      bulletPoints: [
        "Technologies used: Angular, React, Next.js, Nginx, Node.js, Express, MongoDB.",
        "Engineered and implemented comprehensive front-to-back architecture that handles data collection, storage, and retrieval efficiently.",
        "Set up automated systems for sending email alerts to admins whenever users submit their information or request contact, enhancing administrative responsiveness.",
        "Responsible for the full development lifecycle: designing UI/UX, developing the backend logic, performing thorough testing, and deploying the applications on remote servers."
      ],
      icons: [
        {src: "assets/icons/angular.svg", alt: "Angular"},
        {src: "assets/icons/react.svg", alt: "React"},
        {src: "assets/icons/nextjs.svg", alt: "Next.js"},
        {src: "assets/icons/nginx.svg", alt: "NGINX"},
        {src: "assets/icons/nodejs.svg", alt: "Node.js"},
        {src: "assets/icons/express.svg", alt: "Express"},
        {src: "assets/icons/mongodb.svg", alt: "MongoDB"}
      ]
    }
  ];
  


  // can I define and pass an object as input to another component directly in the html with angular?

  iotSystemIcons: {src: string, alt: string}[] = [
    {src: "assets/icons/angular.svg", alt: "Angular"},
    {src: "assets/icons/nodejs.svg", alt: "Node.js"},
    {src: "assets/icons/express.svg", alt: "Express"},
    {src: "assets/icons/influxdb.svg", alt: "Influx"},
    {src: "assets/icons/redis.svg", alt: "Redis"},
    {src: "assets/icons/grafana.svg", alt: "Grafana"},
    {src: "assets/icons/couchdb.svg", alt: "CouchDB"},
    {src: "assets/icons/socketdotio.svg", alt: "Socket.IO"},
    {src: "assets/icons/ansible.svg", alt: "Ansible"},
    {src: "assets/icons/kafka.svg", alt: "Kafka"},
    {src: "assets/icons/pm2.svg", alt: "PM2"},
    {src: "assets/icons/nginx.svg", alt: "NGINX"},
  ]

  cmsIcons: {src: string, alt: string}[] = [
    {src: "assets/icons/angular.svg", alt: "Angular"},
    {src: "assets/icons/nodejs.svg", alt: "Node.js"},
    {src: "assets/icons/express.svg", alt: "Express"},
    {src: "assets/icons/mongodb.svg", alt: "MongoDB"},
    {src: "assets/icons/redis.svg", alt: "Redis"},
    {src: "assets/icons/influxdb.svg", alt: "InfluxDB"},
    {src: "assets/icons/rabbitmq.svg", alt: "RabbitMQ"},
    {src: "assets/icons/docker.svg", alt: "Docker"},
    {src: "assets/icons/stripe.svg", alt: "Stripe"},
    {src: "assets/icons/angularmaterial.svg", alt: "Angular Material"},
    {src: "assets/icons/tailwindcss.svg", alt: "Tailwind"},
    {src: "assets/icons/nginx.svg", alt: "NGINX"},
  ]

  moistureManagementIcons: {src: string, alt: string}[] = [
    {src: "assets/icons/angular.svg", alt: "Angular"},
    {src: "assets/icons/nodejs.svg", alt: "Node.js"},
    {src: "assets/icons/express.svg", alt: "Express"},
    {src: "assets/icons/influxdb.svg", alt: "Influx"},
    {src: "assets/icons/redis.svg", alt: "Redis"},
    {src: "assets/icons/grafana.svg", alt: "Grafana"},
    {src: "assets/icons/couchdb.svg", alt: "CouchDB"},
    {src: "assets/icons/socketdotio.svg", alt: "Socket.IO"},
    {src: "assets/icons/ansible.svg", alt: "Ansible"},
    {src: "assets/icons/nginx.svg", alt: "NGINX"},
  ]

  clientShopIcons: {src: string, alt: string}[] = [
    {src: "assets/icons/angular.svg", alt: "Angular"},
    {src: "assets/icons/nodejs.svg", alt: "Node.js"},
    {src: "assets/icons/express.svg", alt: "Express"},
    {src: "assets/icons/mongodb.svg", alt: "MongoDB"},
    {src: "assets/icons/redis.svg", alt: "Redis"},
    {src: "assets/icons/influxdb.svg", alt: "InfluxDB"},
    {src: "assets/icons/stripe.svg", alt: "Stripe"},
    {src: "assets/icons/docker.svg", alt: "Docker"},
    {src: "assets/icons/angularmaterial.svg", alt: "Angular Material"},
    {src: "assets/icons/tailwindcss.svg", alt: "Tailwind"},
    {src: "assets/icons/nginx.svg", alt: "NGINX"},
  ]

  delphiWarehouseManagementIcons: {src: string, alt: string}[] = [
    {src: "assets/icons/delphi.svg", alt: "Delphi"},
    {src: "assets/icons/firebase.svg", alt: "Firebase"}
  ]

  weddingInviteIcons: {src: string, alt: string}[] = [
    {src: "assets/icons/angular.svg", alt: "Angular"},
    {src: "assets/icons/firebase.svg", alt: "Firebase"},
    {src: "assets/icons/nginx.svg", alt: "NGINX"},
  ]

  productinWebsiteIcons: {src: string, alt: string}[] = [
    {src: "assets/icons/angular.svg", alt: "Angular"},
    {src: "assets/icons/react.svg", alt: "React"},
    {src: "assets/icons/nextjs.svg", alt: "Next.js"},
    {src: "assets/icons/nginx.svg", alt: "NGINX"},
    {src: "assets/icons/nodejs.svg", alt: "Node.js"},
    {src: "assets/icons/express.svg", alt: "Express"},
    {src: "assets/icons/mongodb.svg", alt: "MongoDB"}
  ]

}
