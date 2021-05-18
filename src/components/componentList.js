
import Temporizador from './Temporizador'
import Calendario from './Calendario'

import { AddAlarm, CalendarToday } from '@material-ui/icons'

export const components = [
  {
    'name': 'Temporizador',
    'path': '/temporizador',
    'component': <Temporizador />,
    'icon': <AddAlarm />
  },
  {
    'name': 'Calendario',
    'path': '/calendario',
    'component': <Calendario />,
    'icon': <CalendarToday />
  }
];