import React from 'react'
import MiniCard from '../mini_card';
import {Gap} from '../../atoms';
import { useHistory } from 'react-router-dom';

const Wrapper = () => {
    
    return (
        <div className = "Wrapper">
            <div className="row">
                    <div className="col-sm-6">
                        <MiniCard title="Membuat Program Kalkulator" desc="Praktikan kemampuan dasar anda dalam penggunaan operator, variabel dan juga tipe data"  link = "/codelabs2" />
                        <Gap height = {20} width={20}/>
                    </div>
                    <div className="col-sm-6">
                        <MiniCard title="Membuat Program Kalkulator" desc="Praktikan kemampuan dasar anda dalam penggunaan operator, variabel dan juga tipe data" link="/codelabs1"/>
                        <Gap height = {20} width={20}/>
                    </div>
                    <div className="col-sm-6">
                        <MiniCard title="Membuat Program Kalkulator" desc="Praktikan kemampuan dasar anda dalam penggunaan operator, variabel dan juga tipe data"/>
                        <Gap height = {20} width={20}/>
                    </div>
                    <div className="col-sm-6">
                        <MiniCard title="Membuat Program Kalkulator" desc="Praktikan kemampuan dasar anda dalam penggunaan operator, variabel dan juga tipe data"/>
                        <Gap height = {20} width={20}/>
                    </div>
                    <div className="col-sm-6">
                        <MiniCard title="Membuat Program Kalkulator" desc="Praktikan kemampuan dasar anda dalam penggunaan operator, variabel dan juga tipe data"/>
                        <Gap height = {20} width={20}/>
                    </div>
                    <div className="col-sm-6">
                        <MiniCard title="Membuat Program Kalkulator" desc="Praktikan kemampuan dasar anda dalam penggunaan operator, variabel dan juga tipe data"/>
                        <Gap height = {20} width={20}/>
                    </div>    
            </div>
        </div>
    )
}

export default Wrapper
