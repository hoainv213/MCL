import React, {Component} from 'react';
import Bg_banner from '../Layout/Bg_banner';
import SlugDetail from './../Layout/slugDetail'
import FormFilter from './formFilter';
import callApi from './../../utils/callApi';
import {Link} from 'react-router-dom';
import ReactList from 'react-list'

class ourMasterpieces extends Component {

    constructor(props) {
        super(props);
        this.state = {
            results: [],
            isLoading: true,
        }
    }

    componentDidMount() {
        this.loadMore();
    }

    loadMore = () => {
        this.setState({
            isLoading: true
        });
        this.onSearch = (search) => {
            console.log(search);
            let endPointFilter = '';
            if (typeof search === 'object' && search !== null) {
                endPointFilter = '?' + (JSON.stringify(search).substring(1, JSON.stringify(search).length - 1)).replace(/:/g, '=').replace(/,/g, '&').replace(/"/g, '');
            }
            callApi('filter' + endPointFilter, 'GET').then(res => {
                this.setState(state => ({
                    results: [...res.data.data],
                    isLoading: false
                }))
            })
        };
        callApi(`filter?from=${this.state.cursor}`, 'GET').then(res => {
            this.setState(state => ({
                results: [...res.data.data],
                isLoading: false
            }))
        })
    };

    render() {
        return (
            <div className="home" id="our-properties">
                <Bg_banner/>
                <div className="our-properties">
                    <div className="filter padding-top-30 padding-bottom-60">
                        <div className="container">
                            <SlugDetail/>
                            <div id="filter" className="col-11 clear-padding">
                                <div className="col-12 text-center padding-bottom-30">
                                    <h1 className="title_page">Our masterpieces</h1>
                                </div>
                                <FormFilter search={this.onSearch}/>
                            </div>
                        </div>
                    </div>
                    <div className="container clear-container-mb">
                        <div className="filter-results row">
                            {
                                this.state.results.length > 0 ?
                                    <ReactList
                                        itemRenderer={this.renderItem}
                                        length={this.state.results.length}
                                        minSize={3}
                                        pageSize={3}
                                        threshold={0}
                                    /> :
                                    <div className="col-11"><h5 className="">Sorry, there are no
                                        properties that match your search terms. Please try another search
                                        combination.</h5>
                                    </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    renderItem = (index, key) => {
        let animationDelay = 500;
        let styles = {
            animationDelay:  animationDelay + 200 * ((index) % 3) +'ms'
        };
        return (
            <div className="item-results w3-animate-zoom" key={key} style={styles}>
                <div className="bg_loop">
                    <div className="clear-padding">
                        <Link to={'project/' + this.state.results[index].id}>
                            <img className="img-cover" src={this.state.results[index].image}/>
                        </Link>
                    </div>
                    <div className="clear-padding">
                        <div className="c-result entries_ce__ color-white padding-top-60">
                            <div className="cjs__">
                                <h5 className="property_card">{this.state.results[index].property_type}</h5>
                            </div>
                            <Link className="a-animation" to={'project/' + this.state.results[index].id}>
                                <h2 className="title_project_cart">{this.state.results[index].name}</h2>
                            </Link>
                            <div className="position_btn__">
                                <Link to={'project/' + this.state.results[index].id}>
                                    <button className="btn-transparent btn-fom" type="button">READ MORE</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}

export default ourMasterpieces;