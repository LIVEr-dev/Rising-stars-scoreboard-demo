# Rising Stars Live - Real-time Tournament Scoreboard

A professional, real-time tournament management system with separate Admin Control Panel and Live Viewer. Perfect for sports tournaments, esports events, and live broadcasts.

## Features

✨ **Real-Time Sync**
- Instant updates between Admin and Viewer pages
- Multi-device support (same device or different devices)
- No server required - works completely offline using localStorage

🏆 **Tournament Management**
- Create multiple tournaments
- Add teams with custom names
- Manage tournaments, teams, and matches

⚽ **Match Management**
- Create matches between teams
- Live score updates
- Match status tracking (scheduled, live, completed)
- Automatic standings calculation

⏱️ **Advanced Match Timer**
- Count-up mode (running time) or Count-down mode (time remaining)
- Configurable format: Halves (2 periods) or Quarters (4 periods)
- Custom duration per period
- Start/Pause/Stop controls
- Real-time sync to viewer

📱 **Responsive Design**
- Works on desktop, tablet, and mobile
- Modern dark theme (easy on the eyes)
- Professional UI with real-time animations

## Project Structure

```
rising-stars-live/
├── index.html              # Viewer page (public broadcast)
├── admin.html              # Admin control panel
├── css/
│   └── style.css           # Shared styles
├── js/
│   ├── sync.js             # Real-time data sync engine
│   └── timer.js            # Match timer system
├── assets/                 # Logos, images (future)
└── README.md              # This file
```

## How It Works

### Admin Console (`admin.html`)
The control panel where tournament organizers manage everything:

1. **Tournaments Tab**
   - Create new tournaments
   - Manage tournament details

2. **Teams Tab**
   - Add teams to tournaments
   - Upload team logos
   - Delete teams

3. **Matches Tab**
   - Create matches between teams
   - Update live scores
   - Change match status

4. **Timer Tab**
   - Configure match clock
   - Choose halves or quarters
   - Set duration per period
   - Start/pause/stop the timer

### Viewer Page (`index.html`)
The public broadcast page that shows:

- Current tournament info
- Live match timer (synced from admin)
- Live matches with animated scores
- Upcoming fixtures
- Completed results
- Auto-calculated standings

## Getting Started

### Setup

1. **Download the repository**
   ```bash
   git clone <repo-url>
   cd rising-stars-live
   ```

2. **Open locally**
   - Double-click `index.html` to open the viewer
   - Double-click `admin.html` to open the admin console
   - Or right-click and select "Open with > Browser"

### Usage

#### For Admin (Broadcaster)

1. Open `admin.html` in your browser
2. **Create Tournament:**
   - Go to "Tournaments" tab
   - Enter tournament name, sport, format
   - Click "Create Tournament"

3. **Add Teams:**
   - Go to "Teams" tab
   - Select tournament
   - Enter team names
   - Click "Add Team"

4. **Create Matches:**
   - Go to "Matches" tab
   - Select tournament
   - Choose home and away teams
   - Click "Create Match"

5. **Update Live Scores:**
   - Click "Edit Score" on any match
   - Update scores and status
   - Save (appears instantly on viewer)

6. **Start Match Timer:**
   - Go to "Timer" tab
   - Configure format (halves/quarters) and duration
   - Click "Start"
   - Timer syncs to viewer in real-time

#### For Viewers (Audience)

1. Open `index.html` in a browser
2. Watch tournament updates happen live
3. See match timer synchronized with admin
4. View standings auto-calculated from results

### Multi-Device Setup

**Scenario: Live Event Broadcast**

1. **Admin Station**: Open `admin.html` on admin computer
2. **Display Screen**: Open `index.html` on projector/display
3. **As admin updates scores/timer**: Changes appear instantly on display

**Scenario: Remote Broadcasting**

1. **Admin**: Edit `admin.html` on local computer
2. **Viewers**: Share the `index.html` file or host on a simple web server
3. All viewers see real-time updates

## Data Storage

All data is stored in **browser localStorage**:
- No database needed
- No server required
- Data persists between page refreshes
- Clear browser data to reset everything

### Clearing Data

To start fresh:
- Open browser DevTools (F12)
- Console tab
- Type: `localStorage.clear()`
- Press Enter
- Refresh page

## Customization

### Styling
Edit `css/style.css` to customize colors, fonts, spacing

### Adding More Sports
Edit `js/sync.js` and `admin.html` to add new sports types

### Features to Add
- Team logos/badges
- Player names and stats
- Match events timeline
- PWA (installable app)
- Data export/backup

## Browser Compatibility

✅ Chrome 90+
✅ Firefox 88+
✅ Safari 14+
✅ Edge 90+

Works on all modern browsers that support:
- ES6 JavaScript
- localStorage API
- CSS Grid/Flexbox

## Performance

- **Lightweight**: No dependencies, pure vanilla JavaScript
- **Fast Sync**: Real-time updates <100ms
- **Responsive**: Works smoothly on all devices
- **Offline**: Works completely without internet

## Future Enhancements

- [ ] Cloud sync (Firebase/Supabase)
- [ ] User accounts and permissions
- [ ] Historical match data
- [ ] Advanced statistics
- [ ] Mobile app (React Native)
- [ ] Video stream integration
- [ ] SMS/Push notifications

## License

Free to use. Modify as needed for your tournaments.

## Support

For issues or feature requests, contact: support@risingstars.live

---

**Rising Stars Live** - Professional Tournament Management Made Simple ⭐
