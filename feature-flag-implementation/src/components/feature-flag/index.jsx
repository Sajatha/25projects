import { useContext } from 'react';
import RandomColor from '../randome-color';
import TicTacToe from '../tic-tac-toe';
import LightDarkMode from '../toggle';
import TreeView from '../tree-view';
import Accordian from '../accordian';
import { FeatureFlagsContext } from './context';
import menus from '../tree-view/data';


export default function FeatureFlags() {

    const {loading, enableFlags} = useContext(FeatureFlagsContext)

    const componentsToRender = [
        {
            key : 'showLightAndDarkMode',
            Component : <LightDarkMode/>
        },
        {
            key : 'showTicTacToe',
            Component : <TicTacToe/>
        },
        {
            key : 'showRandomColorGenerator',
            Component : <RandomColor/>
        },
        {
            key : 'showAccordian',
            Component : <Accordian/>
        },
        {
            key : 'showTreeView',
            Component : <TreeView menus={menus}/>
        },
    ]

    function checkEnabledFlags(getCurrentKey) {
        return enableFlags[getCurrentKey]
    }

    if(loading) return <h2>Loading data, please wait!</h2>

    return (
        <div>
            <h2>Feature Flags</h2>
            {
                componentsToRender.map(componentItem => 
                    checkEnabledFlags(componentItem.key) ? componentItem.Component : null)
            }
        </div>
    )
}