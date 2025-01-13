import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function ReservationModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default">Reservations</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Make a Reservation</DialogTitle>
          <DialogDescription>
            Fill out the form below to book your table at Osteria Luna.
          </DialogDescription>
        </DialogHeader>
        <form className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input id="email" type="email" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="date" className="text-right">
              Date
            </Label>
            <Input id="date" type="date" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="time" className="text-right">
              Time
            </Label>
            <Select>
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Select time" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="17:00">5:00 PM</SelectItem>
                <SelectItem value="17:30">5:30 PM</SelectItem>
                <SelectItem value="18:00">6:00 PM</SelectItem>
                <SelectItem value="18:30">6:30 PM</SelectItem>
                <SelectItem value="19:00">7:00 PM</SelectItem>
                <SelectItem value="19:30">7:30 PM</SelectItem>
                <SelectItem value="20:00">8:00 PM</SelectItem>
                <SelectItem value="20:30">8:30 PM</SelectItem>
                <SelectItem value="21:00">9:00 PM</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="guests" className="text-right">
              Guests
            </Label>
            <Select>
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Number of guests" />
              </SelectTrigger>
              <SelectContent>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                  <SelectItem key={num} value={num.toString()}>
                    {num} {num === 1 ? 'Guest' : 'Guests'}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="notes" className="text-right">
              Notes
            </Label>
            <Input id="notes" className="col-span-3" placeholder="Special requests or dietary requirements" />
          </div>
          <div className="flex justify-end gap-4">
            <Button type="submit">Book Table</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
} 