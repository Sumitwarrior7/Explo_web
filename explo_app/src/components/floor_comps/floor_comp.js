import React from 'react';
import { Switch } from 'antd';

function Floor_comp({device_name, img_src}) {

    return (
        <div class="col-lg-3 col-md-6 p-4">
            <div class="card shadow-sm border-0 rounded">
                <div class="card-body p-0" style={{overflow:"hidden"}}>
                    <img src={img_src} alt="" class="w-100 card-img-top" style={{objectFit:"cover", height:"24rem"}}/>
                    <div class="row py-3 px-3 mt-4">
                        <div class="col-6 h5" >{device_name}</div>
                        <div class="col-6 text-end">
                            <Switch size='large' checkedChildren="On" unCheckedChildren="Off"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Floor_comp;