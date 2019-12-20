import React from 'react';


const maps = [{ "id": 1, "text": 'a' }, { "id": 2, "text": 'b' }];

class MapKeysTest extends React.Component {

    constructor() {
        super();
    }



    render() {
        return (
            <div>
                <Welcome map={maps} />
            </div>
        );
    }
}


class Welcome extends React.Component {

    constructor(props) {
        super(props);
        this.state = { map: this.props.map }
    }



    render() {

        return (
            <div>
                {this.state.map.map(value => <ul key={value.id}>{value.text}</ul>)}
            </div>
        );
    }
}


export default MapKeysTest;