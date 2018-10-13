import React from 'react';

export default class LabelFloatInput extends React.Component{
    constructor(props){
        super(props);
        this.state={
            _a:false,
        };
        this['_ref']=Math.random().toString(36).substring(9);
        this.value=props.value?props.value:'';
        this.label=props.label?props.label:'Enter the value';
        this.labelPh=props.value?(props.value.length===0?true:false):true;
        this.color=props.color?props.color:'#0564b2';
        this.fontSize=props.fontSize?props.fontSize:'15px';
        this.fontFamily=props.fontFamily?props.fontFamily:'monospace';

        this.style={
            'label-float-input-wrapper':{
                width:'100%',
                float:'left'
            },
            'field-wrapper':{
                width:'100%',
                float:'left'
            },
            'field-label-ph':{
                color:this.color,
                position:'relative',
                top:'30px',
                fontSize:this.fontSize,
                fontFamily:this.fontFamily,
            },
            'field-label-nonPh':{
                color:this.color,
                position:'relative',
                top:'0px',
                fontSize:this.fontSize,
                fontFamily:this.fontFamily,
            },
            'field-input':{
                width:'100%',
                paddingTop:'8px',
                paddingBottom:'8px',
                border:'0px',
                borderBottom:'2px solid '+this.color,
                outline:'0px',
                fontSize:this.fontSize,
                fontFamily:this.fontFamily,
            }
        }
    }
    componentWillReceiveProps(nextProps){
        if(typeof nextProps.value!=='undefined'){
            if(nextProps.value!== this.value){
                this.value=nextProps.value;
                this.labelPh=nextProps.value.length===0?true:false;
                this.mutateState();
            }
            
        }
        
    }
    mutateState(){
        this.setState({
            _a:!this.state._a,
        })
    }
    onInputChange(_obj,_key,_ref){
        _obj[_key]=this.refs[_ref].value;
        if(this.props.onChange){
            this.props.onChange(this.value);
        }
        this.mutateState();
    }
    handleLabel(_obj,_key,_ref,_type){    
        if(_type==='blur'){
            if(this.refs[_ref].value.trim()===''){
                _obj[_key]=true;
            }
            else{
                _obj[_key]=false;
            }
            if(this.props.onBlur){
                this.props.onBlur(this.value);
            }
        }
        else if(_type==='focus'){
            _obj[_key]=false;
            if(this.refs[_ref]){
                this.refs[_ref].focus();
            }
            if(this.props.onFocus){
                this.props.onFocus(this.value);
            }
        }
        this.mutateState();
    }
    getValue(){
        return this.value;
    }
    render(){
        return(
            <div className='label-float-input-wrapper' style={this.style['label-float-input-wrapper']}>
                <div className='field-wrapper' style={this.style['field-wrapper']}>
                    <div 
                        className={this.labelPh?'field-label-ph':'field-label-nonPh'}
                        onClick={this.handleLabel.bind(this,this,'labelPh',this['_ref'],'focus')}
                        style={this.labelPh?this.style['field-label-ph']:this.style['field-label-nonPh']}
                    >
                        {this.label}
                    </div>
                        <input 
                            type='text'
                            className='field-input'
                            ref={this['_ref']}
                            style={this.style['field-input']}
                            onFocus={this.handleLabel.bind(this,this,'labelPh',this['_ref'],'focus')}
                            onBlur={this.handleLabel.bind(this,this,'labelPh',this['_ref'],'blur')}
                            value={this.value}
                            onChange={this.onInputChange.bind(this,this,'value',this['_ref'])}
                        >
                        </input>
                </div>
            </div>
        )
    }
}