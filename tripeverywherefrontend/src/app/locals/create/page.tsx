import { Button } from '@/components/Button'

export default function Create() {
  return (
    <div>
      <h1 className="text-2xl text-subtitle font-pop underline">
        Create Accommodation
      </h1>
      <div>
        <form>
          <div className="flex flex-col">
            <label>Name Accommodation</label>
            <input
              id="accommodation"
              type="text"
              placeholder="Name Place"
              className="border bg-slate-100 h-10 w-72 px-3 rounded-lg outline-none focus:border focus:border-primary"
            />
          </div>
          <div className="flex flex-col">
            <label>Description</label>
            <input
              id="description"
              type="text"
              placeholder="Descripton"
              className="border bg-slate-100 h-10 w-72 px-3 rounded-lg outline-none focus:border focus:border-primary"
            />
          </div>
          <div className="flex flex-col">
            <label>Address</label>
            <input
              id="address"
              type="text"
              placeholder="Address"
              className="border bg-slate-100 h-10 w-72 px-3 rounded-lg outline-none focus:border focus:border-primary"
            />
          </div>
          <div>
            <label>Beds</label>
            <input
              id="beds"
              type="number"
              className="border bg-slate-100 h-10 w-14 px-3 rounded-lg outline-none focus:border focus:border-primary"
            />
          </div>
          <div>
            <label>Baths</label>
            <input
              id="baths"
              type="number"
              className="border bg-slate-100 h-10 w-14 px-3 rounded-lg outline-none focus:border focus:border-primary"
            />
          </div>
          <div>
            <label>Regular Price</label>
            <input
              id="prices"
              type="number"
              className="border bg-slate-100 h-10 w-20 px-3 rounded-lg outline-none focus:border focus:border-primary"
            />
          </div>

          <Button>Create</Button>
        </form>
      </div>
    </div>
  )
}
