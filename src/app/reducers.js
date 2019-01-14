import { combineReducers } from 'redux';

/*import TopBarReducer from './Components/Common/top-bar/reducer';
import DashboardReducer from './Components/Dashboard/reducer';
import OnDutyReducer from './Components/Dashboard/responsive-grid/grid-tiles/OnDuty/reducer'
import RespondersReducer from './Components/Dashboard/responsive-grid/grid-tiles/Responders/reducer';
import IncidentsTileReducer from './Components/Dashboard/responsive-grid/grid-tiles/incidents-tile/reducer';
import MapTileReducer from './Components/Dashboard/responsive-grid/grid-tiles/Map/reducer';*/

/**
 * Defines mapping of individual view reducers to global state object.
 *
 * Every time a new view is created, entry for that view's reducer is required here.
 *
 * @type {Reducer<any>}
 */

const reducers = combineReducers({
	/*TopBarReducer:TopBarReducer,
	DashboardReducer:DashboardReducer,
	OnDutyReducer:OnDutyReducer,
	RespondersReducer:RespondersReducer,
	IncidentsTileReducer: IncidentsTileReducer,
	MapTileReducer:MapTileReducer*/
});

export default reducers;