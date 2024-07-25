import { Component } from '@angular/core';
import { TypingEffectDirective } from '../../shared/directives/typingEffect';
import { ToggleInViewDirective } from '../../shared/directives/toggleInViewClass';
import { ProjectCardComponent } from '../../shared/components/project-card/project-card.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [TypingEffectDirective, ToggleInViewDirective, ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {


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
