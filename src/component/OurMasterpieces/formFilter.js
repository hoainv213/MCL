import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchFilterMasterpieces} from './../../actions/index';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleDown} from '@fortawesome/free-solid-svg-icons';

class formFilter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            search: {
                type: '',
                country: '',
                status: ''
            }
        }

    }

    componentDidMount() {
        this.props.fetchFilter();
    }

    onSearch = (e) =>{
        let { name, value} = e.target;
        let valueType = document.querySelector('select[name=type]').value;
        let valueCountry = document.querySelector('select[name=country]').value;
        let valueStatus = document.querySelector('select[name=status]').value;
        switch(name) {
            case 'type':
                this.setState({
                    search:{
                        type : value,
                        country: valueCountry,
                        status: valueStatus
                    }
                }, () =>{
                    this.props.search(this.state.search)
                });

                break;
            case 'country':
                this.setState({
                    search:{
                        type : valueType,
                        country: value,
                        status: valueStatus
                    }
                }, () =>{
                    this.props.search(this.state.search)
                });
                break;
            case 'status':
                this.setState({
                    search:{
                        type : valueType,
                        country: valueCountry,
                        status: value
                    }
                }, () =>{
                    this.props.search(this.state.search)
                });
                break;
            default:
        }
    }

    render() {
        let {properties, countries, status} = this.props.filterMasterpieces;
        return (

            <div className="contain_filter row">
                <div className="col-lg-4">
                    <div className="form-group text-center clear-margin">
                        <label className="font-bold " htmlFor="property-type">Property type:</label>
                        <div className="div-select-mcl">
                            <FontAwesomeIcon icon={faAngleDown} className="arrow-select"/>
                            <select name="type" className="form-control select-mcl filter-property" onChange={this.onSearch}>
                                <option value="">ALL PROPERTIES</option>
                                {this.listItem(properties)}
                            </select>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="form-group text-center clear-margin">
                        <label className="font-bold " htmlFor="property-type">Country:</label>
                        <div className="div-select-mcl">
                            <FontAwesomeIcon icon={faAngleDown} className="arrow-select"/>
                            <select name="country" className="form-control select-mcl filter-property" onChange={this.onSearch}>
                                <option value="">All Countries</option>
                                {this.listItem(countries)}
                            </select>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="form-group text-center clear-margin">
                        <label className="font-bold " htmlFor="property-type">Status:</label>
                        <div className="div-select-mcl">
                            <FontAwesomeIcon icon={faAngleDown} className="arrow-select"/>
                            <select name="status" className="form-control select-mcl filter-property" onChange={this.onSearch}>
                                <option value="">ALL</option>
                                {this.listItem(status)}
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    listItem = (initialData = []) => {
        let resuft = null
        if (initialData.length > 0) {
            resuft = initialData.map((value, index) => {
                if (value.name) {
                    return (
                        <option key={index} value={value.id}>{value.name}</option>
                    )
                } else {
                    return (
                        <option key={index} value={value.id}>{value.country_name}</option>
                    )
                }

            })
        }
        return resuft;
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchFilter: () => {
            dispatch(fetchFilterMasterpieces());
        }
    }
};

const mapStateToProps = (state) => {
    return {
        filterMasterpieces: state.filterMasterpieces
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(formFilter);