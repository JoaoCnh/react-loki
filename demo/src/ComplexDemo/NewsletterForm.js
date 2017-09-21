import React from 'react';
import { withFormik } from 'formik';
import Yup from 'yup';

const NewsletterForm = (props) => {
    const {
        // Formik HOC props
        values,
        touched,
        errors,
        isSubmitting,
        onChange,
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
        <form onSubmit={handleSubmit}>
            <div>
                <input type="checkbox" name="receiveNewsletter" id="receiveNewsletter" onChange={onChange} />
                <label htmlFor="receiveNewsletter">Register for newsletter</label>
                {errors.receiveNewsletter && touched.receiveNewsletter && <span>{errors.receiveNewsletter}</span>}
            </div>

            <button type="button" onClick={onBack} disabled={isSubmitting || cantBack}>{backLabel}</button>
            <button type="submit" disabled={isSubmitting}>{nextLabel}</button>
        </form>
    );
};

export default withFormik({
    mapPropsToValues: props => ({
        receiveNewsletter: props.user.receiveNewsletter,
    }),

    validationSchema: Yup.object().shape({
        receiveNewsletter: Yup.boolean(),
    }),

    handleSubmit: (values, { props }) => {
        props.onNext(values);
    },
})(NewsletterForm);