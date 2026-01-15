import { events, Event } from '../data/events';

export default function Sidebar() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const futureEvents = events
    .filter(e => {
      const eventDate = new Date(e.date);
      eventDate.setHours(0, 0, 0, 0);
      return eventDate >= today;
    })
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  const importantDates = futureEvents.filter(e => e.type === 'important').slice(0, 5);
  const upcomingEvents = futureEvents.filter(e => e.type === 'upcoming').slice(0, 4);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-AR', { day: 'numeric', month: 'short' });
  };

  const getNextEvent = (eventList: Event[]) => {
    return eventList.length > 0 ? eventList[0].date : null;
  };

  const nextImportantDate = getNextEvent(importantDates);
  const nextUpcomingEvent = getNextEvent(upcomingEvents);

  return (
    <aside className="space-y-5">
      <div className="bg-white rounded-lg shadow-md p-5 border-t-4 border-gray-800">
        <h3 className="text-lg font-bold text-gray-900 mb-4 uppercase tracking-wide">
          Fechas Importantes
        </h3>
        <ul className="space-y-3">
          {importantDates.map((event, idx) => {
            const isNext = event.date === nextImportantDate;
            return (
              <li
                key={idx}
                className={`flex items-start gap-3 pb-3 border-b border-gray-100 last:border-0 transition ${
                  isNext ? 'bg-blue-50/50 -mx-2 px-2 py-2 rounded' : ''
                }`}
              >
                <div className="flex-shrink-0 w-12 text-center">
                  <div className={`text-xs font-semibold uppercase ${
                    isNext ? 'text-blue-600' : 'text-gray-500'
                  }`}>
                    {formatDate(event.date)}
                  </div>
                </div>
                <div className="flex-1">
                  <p className={`text-sm leading-tight ${
                    isNext ? 'text-gray-900 font-semibold' : 'text-gray-800'
                  }`}>{event.title}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="bg-white rounded-lg shadow-md p-5 border-t-4 border-gray-800">
        <h3 className="text-lg font-bold text-gray-900 mb-4 uppercase tracking-wide">
          Próximos Eventos
        </h3>
        <ul className="space-y-3">
          {upcomingEvents.map((event, idx) => {
            const isNext = event.date === nextUpcomingEvent;
            return (
              <li
                key={idx}
                className={`flex items-start gap-3 pb-3 border-b border-gray-100 last:border-0 transition ${
                  isNext ? 'bg-blue-50/50 -mx-2 px-2 py-2 rounded' : ''
                }`}
              >
                <div className="flex-shrink-0 w-12 text-center">
                  <div className={`text-xs font-semibold uppercase ${
                    isNext ? 'text-blue-600' : 'text-gray-500'
                  }`}>
                    {formatDate(event.date)}
                  </div>
                </div>
                <div className="flex-1">
                  <p className={`text-sm leading-tight ${
                    isNext ? 'text-gray-900 font-semibold' : 'text-gray-800'
                  }`}>{event.title}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}
