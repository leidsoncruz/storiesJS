import { loadStories } from '../actions/Stories';

import Stories from '../components/Stories';

export default data => new Stories(data, loadStories);
