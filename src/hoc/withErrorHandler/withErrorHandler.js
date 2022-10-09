import React, { Component } from 'react';
import Modal from '../../Components/UI/Modal/Modal';
import AAux from '../AAux/AAux';




const WithErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error : null
        }

        componentDidMount () {
          this.reqIntercepter =  axios.interceptors.request.use(req => {
                this.setState({error: null});
                return req;
            })
            this.resIntercepter = axios.interceptors.response.use(res => res, error => {
             this.setState({ error: error});
            });
        }

            componentWillUnmount(){
                // console.log(' will unmoont', this.reqIntercepter, this.resIntercepter);
                axios.interceptors.request.eject(this.reqIntercepter);
                axios.interceptors.response.eject(this.resIntercepter);
            }


        errorConfirmedHandler = () => {
            this.setState({error: null})
        }
        render() {
            return (
                <AAux>
                    <Modal show = {this.state.error}
                  modalClosed= {this.errorConfirmedHandler}
                    >
                       {this.state.error ? this.state.error.message : null}
                        </Modal>
                    <WrappedComponent {...this.props} />

                </AAux>
            );
        }
    }
}

export default WithErrorHandler;