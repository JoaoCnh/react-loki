import React from 'react';
import { withFormik } from 'formik';
import Yup from 'yup';

const UserForm = (props) => {
    const {
        // Formik HOC props
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,

        // Loki props
        backLabel,
        nextLabel,
        onBack,
        onNext,
        cantBack,
        isInFinalStep,
    } = props;

    return (
        <form onSubmit={handleSubmit} className="p-1">
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className={`form-control ${errors.name && touched.name && 'is-invalid'}`} 
                    name="name" id="name" value={values.name} onChange={handleChange} onBlur={handleBlur} />
                {errors.name && touched.name && <div className="invalid-feedback">{errors.name}</div>}
            </div>
            <div className="form-group">
                <label htmlFor="email">E-mail</label>
                <input type="text" className={`form-control ${errors.email && touched.email && 'is-invalid'}`} 
                    name="email" id="email" value={values.email} onChange={handleChange} onBlur={handleBlur} />
                {errors.email && touched.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>

            <div className="button-group">
                <button type="button" className="btn btn-secondary" onClick={onBack} disabled={isSubmitting || cantBack}>{backLabel}</button>
                <button type="submit" className="btn btn-primary ml-1" disabled={isSubmitting}>{nextLabel}</button>
            </div>
        </form>
    );
};

export default withFormik({
    mapPropsToValues: props => ({
        name: props.user.name,
        email: props.user.email,
    }),

    validationSchema: Yup.object().shape({
        name: Yup.string().required(),
        email: Yup.string().email().required(),
    }),

    handleSubmit: (values, { props }) => {
        props.onNext(values);
    },
})(UserForm);