import fixture from '../fixture.json';
import Stories from './containers/Stories';

const stories = Stories(fixture);
document.body.appendChild(stories);
