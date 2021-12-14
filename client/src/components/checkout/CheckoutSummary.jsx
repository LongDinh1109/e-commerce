import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import editFill from '@iconify/icons-eva/edit-fill';
// material
import {
  Box,
  Card,
  Stack,
  Button,
  Divider,
  TextField,
  CardHeader,
  Typography,
  CardContent,
  InputAdornment
} from '@material-ui/core';
import useLocales from '../../hooks/useLocales';
// utils
import { fCurrency, fNumber } from '../../utils/formatNumber';

// ----------------------------------------------------------------------

CheckoutSummary.propTypes = {
  total: PropTypes.number,
  discount: PropTypes.number,
  subtotal: PropTypes.number,
  shipping: PropTypes.number,
  onApplyDiscount: PropTypes.func,
  enableDiscount: PropTypes.bool,
  sx: PropTypes.object
};

export default function CheckoutSummary({
  total,
  discount,
  subtotal,
  shipping = 0,
  onApplyDiscount,
  enableDiscount = false,
  sx
}) {
  const { t, currentLang } = useLocales();

  return (
    <Card sx={{ mb: 3, ...sx }}>
      <CardHeader title={t('cart.order.summary')} />

      <CardContent>
        <Stack spacing={2}>
          <Stack direction="row" justifyContent="space-between">
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {t('cart.order.sub-total')}
            </Typography>
            <Typography variant="subtitle2">{`${fNumber(subtotal)} ₫`}</Typography>
          </Stack>

          <Stack direction="row" justifyContent="space-between">
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {t('cart.order.discount')}
            </Typography>
            <Typography variant="subtitle2">{fCurrency(discount, currentLang.value)}</Typography>
          </Stack>

          <Stack direction="row" justifyContent="space-between">
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {t('cart.order.shipping-fee')}
            </Typography>
            <Typography variant="subtitle2">{fCurrency(shipping, currentLang.value)}</Typography>
          </Stack>

          <Divider />

          <Stack direction="row" justifyContent="space-between">
            <Typography variant="subtitle1">{t('cart.order.total')}</Typography>
            <Box sx={{ textAlign: 'right' }}>
              <Typography variant="subtitle1" sx={{ color: 'error.main' }}>
                {fCurrency(total, currentLang.value)}
              </Typography>
              <Typography variant="caption" sx={{ fontStyle: 'italic' }}>
                {`(${t('cart.order.include-vat')})`}
              </Typography>
            </Box>
          </Stack>

          {enableDiscount && (
            <TextField
              fullWidth
              placeholder="Discount codes / Gifts"
              value="DISCOUNT5"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Button type="button" onClick={() => onApplyDiscount(5)} sx={{ mr: -0.5 }}>
                      Apply
                    </Button>
                  </InputAdornment>
                )
              }}
            />
          )}
        </Stack>
      </CardContent>
    </Card>
  );
}
