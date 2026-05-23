## Goal

Restructure `src/routes/tariff.tsx` to match the reference site's Local tariff layout (City / Town sub-tabs with city/town name lists) and redesign the Outstation table so it fits without horizontal scrolling.

## 1. Local Tariff — City / Town structure

Mirror the reference site:
- Add a secondary sub-tab inside Local: **City** and **Town** (pill toggle, smaller than the main tab, same brand styling).
- Under each sub-tab, show:
  - A **list of covered places** as rounded pill chips (`bg-cream text-brand border border-border`).
    - City: Madurai, Trichy, Chennai (the main metros served).
    - Town: Ramnad, Paramakudi, Karaikudi, Devakottai, Sivagangai, Dindigul, Manamadurai, Virudhunagar, Aruppukkottai, Sivakasi, Pudukkottai, Kovilpatti.
  - The tariff card for that area only (Base Fare, Free km, Free Hours, Waiting, Addl km Non A/C, Addl km A/C, Vehicles) shown as a clean stacked spec list / 2-column grid — no wide table needed since it's a single row of data.
- Keep Night charges + Extras info cards underneath.

## 2. Outstation Tariff — no horizontal scroll

Replace the 24-column wide table with a vertical-friendly layout that works at all viewport widths:

**Approach: Vehicle selector + package table.**
- Top: a horizontal scrollable strip of **vehicle chips** (13 vehicles) as a selector. Selected chip = `bg-primary text-primary-foreground`, others = `bg-cream text-brand`. The chip strip wraps to multiple lines on desktop (`flex flex-wrap justify-center gap-2`) so no scrolling at all on web; on mobile it wraps too (chips are short).
- Below: a single narrow table for the selected vehicle with columns: **Package · Rate · Addl km · Hills/km**. Only 4 columns → fits any viewport, no horizontal scroll. 21 rows (one per package). Addl km and Hills/km repeat the vehicle's value (or shown once in a summary card above the table to keep rows clean — pick the summary-card option).

Final Outstation layout:
1. Vehicle chip selector (wraps, no scroll).
2. Summary card for selected vehicle: Addl km · Hills/km · A/C status.
3. Clean 2-column table (Package | Rate) — fits mobile and desktop natively.
4. Additional Hours Charges table stays but is reformatted to wrap: on mobile, convert to stacked cards (one card per distance band, vehicle rates as label/value rows); on `md+` keep the existing table (5 columns fits 1024px+ fine without min-width).
5. Driver bata + Extras info cards.

Remove all `min-w-[1200px]`, `overflow-x-auto`, and sticky-column hacks from the outstation section.

## 3. Header / hero wrap

Adjust hero so the heading wraps cleanly at narrow widths:
- `text-balance` on h1 and paragraph.
- Reduce hero horizontal padding on mobile, keep current desktop sizing.

## Technical notes

- All changes in `src/routes/tariff.tsx` only.
- Keep existing brand tokens (`bg-brand`, `bg-cream`, `text-primary`, etc.) — no styles.css changes.
- Use `useState` for the new `localArea: "City" | "Town"` and `selectedVehicle: number` (index into outstationVehicles).
- No new dependencies, no data changes — reuse the existing `localTariffs`, `outstationPackages`, `outstationVehicles`, `additionalHourly` arrays.
