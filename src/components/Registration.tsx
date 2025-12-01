import { useState } from "react";
import { User, Mail, Phone, Calendar, Users, Key } from "lucide-react";
import toast from "react-hot-toast";

// 🔥 ENV API (Vite)
const API_BASE = import.meta.env.VITE_API_BASE;

export default function Registration() {
  const [seatCategory, setSeatCategory] = useState<"regular" | "vip" | "vvip">(
    "regular"
  );
  const [vipVerified, setVipVerified] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    gender: "",
    dateOfBirth: "",
    numberOfSeats: 1,
    registrationCode: "",
    extraGuests: [] as string[], // optional for VIP/VVIP
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Add extra guest handler (optional)
  const handleExtraGuestsChange = (index: number, value: string) => {
    const guests = [...formData.extraGuests];
    guests[index] = value;
    setFormData({ ...formData, extraGuests: guests });
  };

  const addExtraGuest = () => {
    setFormData({ ...formData, extraGuests: [...formData.extraGuests, ""] });
  };

  const handleVipVerification = async () => {
    if (!formData.registrationCode)
      return toast.error("Please enter your VIP code.");
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/vip/validate-code`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          code: formData.registrationCode,
          category: seatCategory.toUpperCase(),
        }),
      });
      const data = await res.json();

      if (data.valid) {
        toast.success("VIP code verified! Complete your registration below.");
        setVipVerified(true);
      } else {
        toast.error(data.message || "Invalid VIP code.");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong while verifying code.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Map payload differently for VIP/VVIP
      let payload: any = {};
      if (seatCategory === "regular") {
        payload = {
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          gender: formData.gender,
          dob: formData.dateOfBirth,
          numberOfSeats: formData.numberOfSeats,
        };
      } else {
        payload = {
          code: formData.registrationCode,
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          gender: formData.gender,
          dob: formData.dateOfBirth,
          extraGuests: formData.extraGuests,
        };
      }

      const endpoint =
        seatCategory === "regular"
          ? `${API_BASE}/register/regular`
          : `${API_BASE}/vip/register`;

      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (data.success) {
        toast.success(
          "Registration successful! Check your email for your QR code."
        );
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          gender: "",
          dateOfBirth: "",
          numberOfSeats: 1,
          registrationCode: "",
          extraGuests: [],
        });
        setSeatCategory("regular");
        setVipVerified(false);
      } else {
        toast.error(data.message || "Registration failed");
      }
    } catch (error) {
      console.error("Registration error:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="register"
      className="relative py-20 overflow-hidden"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 via-gray-900/85 to-gray-900/90"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Register Now
          </h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-6"></div>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Secure your seat at this historic event
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 md:p-12 border-t-4 border-[#8B0000]">
            {/* Seat category selection */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Select Seat Category *
              </label>
              <div className="grid grid-cols-3 gap-4">
                {["regular", "vip", "vvip"].map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => {
                      setSeatCategory(type as any);
                      setVipVerified(false);
                    }}
                    className={`py-3 px-4 rounded-lg font-semibold transition-all ${
                      seatCategory === type
                        ? "bg-gray-700 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {type.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            {/* VIP code verification */}
            {(seatCategory === "vip" || seatCategory === "vvip") &&
              !vipVerified && (
                <div className="space-y-4">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <Key className="inline mr-2" size={16} />
                    Enter Registration Code *
                  </label>
                  <input
                    type="text"
                    name="registrationCode"
                    value={formData.registrationCode}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                  />
                  <button
                    type="button"
                    onClick={handleVipVerification}
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-[#8B0000] to-[#A52A2A] text-white py-4 rounded-lg font-bold text-lg transition-all"
                  >
                    {loading ? "Verifying..." : "Verify Code"}
                  </button>
                </div>
              )}

            {/* Registration form */}
            {(seatCategory === "regular" || vipVerified) && (
              <form onSubmit={handleSubmit} className="space-y-6 mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <User className="inline mr-2" size={16} />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <Mail className="inline mr-2" size={16} />
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <Phone className="inline mr-2" size={16} />
                      Phone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Gender *
                    </label>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                    >
                      <option value="">Select gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <Calendar className="inline mr-2" size={16} />
                      Date of Birth *
                    </label>
                    <input
                      type="date"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <Users className="inline mr-2" size={16} />
                      Number of Seats
                    </label>
                    <input
                      type="number"
                      name="numberOfSeats"
                      value={formData.numberOfSeats}
                      onChange={handleChange}
                      min="1"
                      max={seatCategory === "regular" ? 10 : 1}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                    />
                  </div>
                </div>

                {/* Extra guests for VIP/VVIP */}
                {(seatCategory === "vip" || seatCategory === "vvip") &&
                  vipVerified &&
                  formData.extraGuests.map((guest, idx) => (
                    <div key={idx}>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Guest {idx + 1} Email
                      </label>
                      <input
                        type="email"
                        value={guest}
                        onChange={(e) =>
                          handleExtraGuestsChange(idx, e.target.value)
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                      />
                    </div>
                  ))}

                {(seatCategory === "vip" || seatCategory === "vvip") &&
                  vipVerified && (
                    <button
                      type="button"
                      onClick={addExtraGuest}
                      className="w-full bg-gray-200 text-gray-700 py-2 rounded-lg font-semibold"
                    >
                      Add Guest
                    </button>
                  )}

                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full bg-gradient-to-r from-[#8B0000] to-[#A52A2A] text-white py-4 rounded-lg font-bold text-lg transition-all ${
                    loading ? "opacity-50" : "hover:scale-105"
                  }`}
                >
                  {loading ? "Registering..." : "Complete Registration"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
