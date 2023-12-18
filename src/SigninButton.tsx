import React from 'react';
import {API_ENDPOINT_URL, DEVELOPMENT_MODE, GOOGLE_OAUTH_CLIENT_ID} from "./configuration";
import {getUrl} from "./tools/Tools";
import axios from "axios";

export default class SigninButton extends React.Component {

    state = {
        hideButton: true
    }

    componentDidMount() {
        axios.get(getUrl('/auth/checksignedin'), {
            withCredentials: true,
            validateStatus: function (status) {
                return status < 500;
            }
        }).then(res => {
            const status = res.status;
            this.setState({hideButton: status !== 200});
        })
    }

    render() {
        if (!this.state.hideButton) {
            return (
                <>
                    <div id="g_id_onload"
                         data-client_id={GOOGLE_OAUTH_CLIENT_ID}
                         data-context="signin"
                         data-ux_mode="popup"
                         data-login_uri={(DEVELOPMENT_MODE ? "http://localhost:8082" : API_ENDPOINT_URL) + "/auth/google"}
                         data-auto_select="true"
                         data-auto_prompt="false"
                    >
                    </div>
                    <div className="g_id_signin"
                         data-type="standard"
                         data-shape="pill"
                         data-theme="outline"
                         data-text="signin_with"
                         data-size="large"
                         data-logo_alignment="left"
                    >
                    </div>
                </>
            );
        } else {
            return (
                <></>
            )
        }

    }
}
