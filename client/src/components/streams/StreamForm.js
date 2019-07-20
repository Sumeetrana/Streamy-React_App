import React from 'react';
import  { Field, reduxForm } from 'redux-form';


class StreamForm extends React.Component {

    renderInput = (formProps) => {
        // console.log(formProps); built-in keyword
        console.log(formProps);
        // console.log(formProps.meta.error);
        const className = `field ${formProps.meta.error && formProps.meta.touched ? 'error' : ''}`;
        return (
            <div className={className}>
                <label>{formProps.label}</label>
                <input {...formProps.input} autoComplete="off"/>
                {this.renderError(formProps.meta)}
            </div>
        )
        
    }

    renderError = (meta) => {
        if (meta.error && meta.touched) {
            return (
                <div className="ui error message">
                    <div className="header">{meta.error}</div>
                </div>
            )
        }
    }

    onSubmit = (formValues) => {
        this.props.onSubmit(formValues);
        // console.log(formValues);
            
    }

    render() {
        // console.log(this.props);
        return (
            <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field name="title" component={this.renderInput} label="Enter Title"/>
                <Field name="description" component={this.renderInput} label="Enter Description"/>

                <button className="ui button primary">Submit</button>
                
            </form>
        )
        
    }
}

const validate = (formValues) => {
    const errors = {};

    if (!formValues.title) {
        errors.title = "You must enter a title"
    }

    
    if (!formValues.description) {
        errors.description = "You must enter a description"
    }

    return errors
}

export default  reduxForm({
    form: 'streamForm',
    validate: validate
})(StreamForm);

