/* content type icons */
/* let this be set by plonetheme.sunburst in the future and make use of the
 * contenttypes-sprite. */
/*.icons-on .contenttype-event,*/
.icons-on .contenttype-plone-app-event-dx-event {
    background: url("event_icon.png") no-repeat scroll 0 4px transparent;
}
/*.icons-on .contenttype-event,*/
.icons-on .contenttype-plone-app-event-dx-event {
    line-height: 2em;
    display: inline-block;
    *display: block;
    padding-left: 20px !important;
}
.event.summary {
    float: right;
    clear: right; /* if there are more right-floating elements, clear them, so
                   * they are displayed among each other */
    margin 1em 0 1em 1em;
}

/* event listing styles */


/* BEGIN COMMON EVENT STYLES */

article.vevent a.event_ical img {
    vertical-align: baseline;
    height: 1em;
    width: auto;
    color: #007bb3;
}
.vevent div.cal_date {
    float:left;
    vertical-align:top;
    text-align: center;
    margin: 42px 1.5em 0.5em 0;
    background-color:white;
    border-radius:0.5em;
    /*box-shadow: 0.5em 0.5em 0.4em black;*/
    min-width:4.4em;
}
.vevent span.cal_wkday {
    display:block;
    font-size:1em;
    font-weight:normal;
    padding-bottom:0.3em;
}
.vevent span.cal_day {
    font-size:1.7em;
    display:block;
    padding-top:0.3em;
}
.vevent span.cal_month {
    font-size:1.1em;
    line-height:1.3em;
    background: #007bb3;
    display:block;
}

.vevent div.cal_info { margin-left:9em; }

/* horizontal event metadata */
#content .vevent ul.metadata { margin: 0.8em 0; }
#content .vevent ul.horizontal { padding: 0; }
#content .vevent ul.horizontal li {
    display: inline-block;
    line-height: 1.5em;
    list-style-image: none;
    list-style-type: none;
}
.vevent .horizontal.metadata li:after { content: " \2014 "; }
.vevent .horizontal.metadata li:last-child:after { content: ""; }
.vevent .horizontal.metadata .category span:after { content: ","; }
.vevent .horizontal.metadata .category span:last-child:after { content: ""; }

.vevent .timezone {
    display:block;
    margin-top:0.5em;
    padding:0.2em 0;
    background-color:#ffe;
    color:#354;
    width:100%;
}

.vevent .timerange, .vevent .timezone {
    font-size:85%;
    line-height:1em;
    white-space:nowrap;
}

.vevent .datedisplay {
    line-height:1.5em;
    margin-bottom:0.2em;
    /*font-weight:bold;*/
    font-size:100%;
}

.vevent abbr.dtstart {
    /*font-weight:bold;*/
}
/* END COMMON EVENT STYLES */


/* BEGIN EVENT LISTING STYLES */
.template-event_listing .documentFirstHeading {
    position: relative;
}
.template-event_listing .documentFirstHeading nav {
    font-size: 14px;
    position: absolute;
    right: 0;
    bottom: 13px;
}
.template-event_listing .documentFirstHeading nav ul {
    margin:0;
    list-style-type:none;
}
.template-event_listing ul.mode_selector {
    display: block;
    margin-left: 0;
    list-style-type: none;
}
.template-event_listing ul.mode_selector li {
    display: inline;
}
.template-event_listing nav ul.mode_selector li a {
    display: inline-block;
    margin-left: 0.5em;
}
.template-event_listing nav ul.mode_selector li a:hover,
.template-event_listing nav ul.mode_selector li a:focus {
    text-decoration: underline;
    border-bottom: 0;
}

/* END EVENT LISTING STYLES */



/* BEGIN PORTLET CALENDAR */
.portletCalendar {
    width: auto;
    margin: 1px 0 1em 0;
}

.portletCalendar dt {
    background-color: #eee;
    font-weight: bold;
    text-align: center;
    line-height: 1.6em;
    border-bottom: none;
}

.portletCalendar dd {
    margin: 0;
    padding: 0;
}

.portletCalendar dt a.calendarPrevious {
    float: left;
    padding: 0 1em;
    margin: 0 -.5em;
}

.portletCalendar dt a.calendarNext {
    float: right;
    padding: 0 1em;
    margin: 0 -.5em;
}

.portletCalendar a, .portletCalendar a:focus,
.portletCalendar a, .portletCalendar a:hover,
.ploneCalendar a {
    text-decoration: none;
    border-bottom: none !important;
}

.ploneCalendar {
    border-spacing: 0;
    width:100%;
}

.ploneCalendar td {
    background-color: transparent;
    width: 14%;
    text-align: center;
    padding: 2px;
    border: 2px solid #eee;
    background-color: #eee;
}

.ploneCalendar .weekdays th {
    background-color: #eee;
    text-align: center;
    padding: 2px;
}

.ploneCalendar .event {
    background-color: #eee;
}

.ploneCalendar .todayevent {
    background-color: #eee;
    border: 2px solid #205C90;
}

.ploneCalendar .todaynoevent {
    border: 2px solid #205C90;
}

/* additional to sunburst */
.ploneCalendar td.today {
    background-color: white;
    border-color: #205C90;
}
.ploneCalendar td:hover { background-color: white; }
.ploneCalendar td a {
    display:inline-block;
    width:100%;
    height:100%;
}

/* grey out prev/next month incl. links and background */
.ploneCalendar td.cal_prev_month,
.ploneCalendar td.cal_next_month {
    opacity:0.4;
}

/* tooltip styling. by default the element to be styled is .tooltip  */
.pae_calendar_tooltip {
    display:none;
    background-color:white;
    border:1px solid black;
    border-radius:0.3em;
    box-shadow: 0.1em 0.1em 0.1em black;
    font-size:80%;
    padding:10px;
    margin:10px;
    max-width: 30em;
    z-index: 10;
}
.pae_calendar_tooltip a {
    color:black;
    display:block;
    width:100%;
}
.pae_calendar_tooltip a:hover { color:blue; }
.pae_calendar_tooltip a .title { font-weight:bold; }

/* END PORTLET CALENDAR */


/* EDIT FORM STYLES */

/* DX fields */
#formfield-form-widgets-IEventBasic-start,
#formfield-form-widgets-IEventBasic-end,
#formfield-form-widgets-IEventBasic-whole_day,
#formfield-form-widgets-IEventBasic-open_end,
/* AT fields */
#archetypes-fieldname-startDate,
#archetypes-fieldname-endDate,
#archetypes-fieldname-wholeDay,
#archetypes-fieldname-openEnd,
 {
    clear:none;
    float:left;
    margin-right: 2em;
    vertical-align: top;
}
#formfield-form-widgets-IEventBasic-whole_day,
#archetypes-fieldname-wholeDay {
    clear:left;
}
#formfield-form-widgets-IEventRecurrence-recurrence,
#archetypes-fieldname-recurrence {
    clear:left;
}
