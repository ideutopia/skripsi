import React from 'react'
import MiniCard from '../mini_card';
import {Gap} from '../../atoms';
// import { useHistory } from 'react-router-dom';
import * as dataString from '../../../data';

const Wrapper = () => {
    
    return (
        <div className = "Wrapper">
            <div className="row">
                    <div className="col-sm-6">
                        <MiniCard title={dataString.lab1String.judul} desc= {dataString.lab1String.deskripsi}  link = {dataString.lab1String.link} />
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
                        <MiniCard title={dataString.lab4String.judul} desc={dataString.lab4String.deskripsi} link={dataString.lab4String.link} />
                        <Gap height = {20} width={20}/>
                    </div>
                    <div className="col-sm-6">
                        <MiniCard title={dataString.lab5String.judul} desc={dataString.lab5String.deskripsi} link={dataString.lab5String.link} />
                        <Gap height = {20} width={20}/>
                    </div>
                    <div className="col-sm-6">
                        <MiniCard title= {dataString.lab6String.judul} desc= {dataString.lab6String.deskripsi} link={dataString.lab6String.link} />
                        <Gap height = {20} width={20}/>
                    </div>
                    <div className="col-sm-6">
                        <MiniCard title= {dataString.lab7String.judul} desc= {dataString.lab7String.deskripsi} link={dataString.lab7String.link} />
                        <Gap height = {20} width={20}/>
                    </div>      
            </div>
        </div>
    )
}

export default Wrapper
