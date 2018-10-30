import 'zone.js/dist/zone-node';
import 'reflect-metadata';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import {AppServerModule} from './app/app.server.module';
import {ngExpressEngine} from '@nguniversal/express-engine';
import * as express from 'express';

declare var require: any;
declare var __dirname: string;

const path = require('path');

if (environment.production) {
  enableProdMode();
}

const app = express();

// this section set the templating engine so we can bring index.html of our angular app and components will be replaced with html
// make sure to replace this with the name of the path of your client
const clientDistFolder = path.resolve(__dirname, '../test-angular');
app.engine('html', ngExpressEngine({
  bootstrap: AppServerModule
}));
app.set('view engine', 'html');
app.set('views', clientDistFolder);

// to serve the static files
app.get('*.*', express.static(clientDistFolder));

// render with the template engine
app.get('*', function(req, res) {
  res.render('index', {
    req
  });
});

app.listen(3000, function() {
  console.log('our server is now listening on port 3000');
});