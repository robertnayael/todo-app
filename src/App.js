import React from 'react'
import { bindActionCreators } from 'redux'
import * as actions from './actions'
import { connect } from 'react-redux'

class App extends React.Component {

  render() {
    return (
        <h1>TO-DO App</h1>
    )
  }

}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(App)