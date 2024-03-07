import { useEffect, useState, MouseEvent } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Grid, ListItemButton, Menu, Stack, Typography, useMediaQuery } from '@mui/material';

// third-party
import ReactApexChart, { Props as ChartProps } from 'react-apexcharts';

// project-imports
import MainCard from 'components/MainCard';
import Dot from 'components/@extended/Dot';
import IconButton from 'components/@extended/IconButton';

// assets
import { ArrowUp, More } from 'iconsax-react';

// types
import { ThemeMode } from 'types/config';

// chart options
const pieChartOptions = {
  chart: {
    type: 'donut',
    height: 320
  },
  labels: ['Visão Geral dos Clientes', 'Total rent', 'Download', 'Views'],
  legend: {
    show: false
  },
  dataLabels: {
    enabled: false
  }
};

// ==============================|| CHART ||============================== //

const ApexDonutChart = () => {
  const theme = useTheme();
  const downSM = useMediaQuery(theme.breakpoints.down('sm'));

  const mode = theme.palette.mode;

  const { primary } = theme.palette.text;
  const line = theme.palette.divider;
  const grey200 = theme.palette.secondary[200];
  const backColor = theme.palette.background.paper;

  const [series] = useState([40, 10, 15, 10]);
  const [options, setOptions] = useState<ChartProps>(pieChartOptions);

  useEffect(() => {
    const primaryMain = theme.palette.primary.main;
    const errorMain = theme.palette.error.main;
    const warning = theme.palette.warning.main;
    const success = theme.palette.success.main;

    setOptions((prevState) => ({
      ...prevState,
      colors: [primaryMain, success, warning, errorMain],
      xaxis: {
        labels: {
          style: {
            colors: [primary, primary, primary, primary, primary, primary, primary]
          }
        }
      },
      yaxis: {
        labels: {
          style: {
            colors: [primary]
          }
        }
      },
      grid: {
        borderColor: line
      },
      stroke: {
        colors: [backColor]
      },
      theme: {
        mode: mode === ThemeMode.DARK ? 'dark' : 'light'
      }
    }));
  }, [mode, primary, line, grey200, backColor, theme]);

  return (
    <div id="chart">
      <ReactApexChart options={options} series={series} type="donut" height={downSM ? 280 : 320} />
    </div>
  );
};

// ==============================|| CHART WIDGETS - TOTAL INCOME ||============================== //

const TotalIncome = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <MainCard>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={1}>
            <Typography variant="h5">Visão Geral de Clientes</Typography>
            <IconButton
              color="secondary"
              id="wallet-button"
              aria-controls={open ? 'wallet-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            >
              <More style={{ transform: 'rotate(90deg)' }} />
            </IconButton>
            <Menu
              id="wallet-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'wallet-button',
                sx: { p: 1.25, minWidth: 150 }
              }}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right'
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
            >
              <ListItemButton onClick={handleClose}>Today</ListItemButton>
              <ListItemButton onClick={handleClose}>Weekly</ListItemButton>
              <ListItemButton onClick={handleClose}>Monthly</ListItemButton>
            </Menu>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <ApexDonutChart />
        </Grid>
        <Grid item xs={12} sm={6}>
          <MainCard content={false} border={false} sx={{ bgcolor: 'background.default' }}>
            <Stack alignItems="flex-start" sx={{ p: 2 }} spacing={0.5}>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Dot componentDiv />
                <Typography>Ativos</Typography>
              </Stack>

              <Typography variant="subtitle1" sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                224.780
                <Typography
                  variant="caption"
                  color="text.secondary"
                  sx={{ fontWeight: 600, display: 'flex', alignItems: 'center', gap: 0.25 }}
                >
                  <ArrowUp size={14} /> +30,6%
                </Typography>
              </Typography>
            </Stack>
          </MainCard>
        </Grid>
        <Grid item xs={12} sm={6}>
          <MainCard content={false} border={false} sx={{ bgcolor: 'background.default' }}>
            <Stack alignItems="flex-start" sx={{ p: 2 }} spacing={0.5}>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Dot componentDiv color="warning" />
                <Typography>Cancelados</Typography>
              </Stack>
              <Typography variant="subtitle1" sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                154.989
                <Typography
                  variant="caption"
                  color="text.secondary"
                  sx={{ fontWeight: 600, display: 'flex', alignItems: 'center', gap: 0.25 }}
                >
                  <ArrowUp size={14} /> +30,6%
                </Typography>
              </Typography>
            </Stack>
          </MainCard>
        </Grid>
        <Grid item xs={12} sm={6}>
          <MainCard content={false} border={false} sx={{ bgcolor: 'background.default' }}>
            <Stack alignItems="flex-start" sx={{ p: 2 }} spacing={0.5}>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Dot componentDiv color="error" />
                <Typography>Com Erro</Typography>
              </Stack>
              <Typography variant="subtitle1" sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                104.699
                <Typography
                  variant="caption"
                  color="text.secondary"
                  sx={{ fontWeight: 600, display: 'flex', alignItems: 'center', gap: 0.25 }}
                >
                  <ArrowUp size={14} /> +30,6%
                </Typography>
              </Typography>
            </Stack>
          </MainCard>
        </Grid>
        <Grid item xs={12} sm={6}>
          <MainCard content={false} border={false} sx={{ bgcolor: 'background.default' }}>
            <Stack alignItems="flex-start" sx={{ p: 2 }} spacing={0.5}>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Dot componentDiv color="success" />
                <Typography>Para Exclusão</Typography>
              </Stack>
              <Typography variant="subtitle1" sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                1.465
                <Typography
                  variant="caption"
                  color="text.secondary"
                  sx={{ fontWeight: 600, display: 'flex', alignItems: 'center', gap: 0.25 }}
                >
                  <ArrowUp size={14} /> +30,6%
                </Typography>
              </Typography>
            </Stack>
          </MainCard>
        </Grid>
      </Grid>
    </MainCard>
  );
};

export default TotalIncome;
