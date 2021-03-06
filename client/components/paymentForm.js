import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import {CardElement} from 'react-stripe-elements'

function PaymentForm(props) {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <TextField
            required
            id="cardName"
            label="Name on card"
            name="cardName"
            value={props.cardName}
            onChange={props.handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <CardElement style={{base: {fontSize: '18px'}}} />
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default PaymentForm
