import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { Send, MapPin, Mail, Phone, Github, Twitter, Linkedin } from 'lucide-react'
import { useState } from 'react'

const Contact = () => {
    const [isSubmitted, setIsSubmitted] = useState(false)
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm()

    const onSubmit = async (data) => {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000))
        console.log(data)
        setIsSubmitted(true)
    }

    return (
        <section id="contact" className="py-24 px-6 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                {/* Info Side */}
                <div>
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="text-4xl md:text-5xl font-bold mb-8"
                    >
                        Let's build <br />
                        <span className="text-accent">something legendary.</span>
                    </motion.h2>

                    <p className="text-lg text-white/60 mb-12 max-w-md">
                        Have a project in mind or just want to chat about Linux?
                        Drop me a message and I'll get back to you faster than light.
                    </p>

                    <div className="space-y-8 mb-12">
                        <div className="flex items-center gap-6 group">
                            <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center group-hover:bg-accent group-hover:text-background transition-all">
                                <Mail size={20} />
                            </div>
                            <div>
                                <p className="text-xs uppercase text-white/40 tracking-widest mb-1">Email Me</p>
                                <p className="font-medium">bhooleop@gmail.com</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-6 group">
                            <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center group-hover:bg-accent-purple group-hover:text-background transition-all">
                                <MapPin size={20} />
                            </div>
                            <div>
                                <p className="text-xs uppercase text-white/40 tracking-widest mb-1">Location</p>
                                <p className="font-medium">Pune, India 🇮🇳</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        {[ { Icon: Github, href: "https://github.com/bhooleop-droid/" }, { Icon: Linkedin, href: "#" }, { Icon: Twitter, href: "#" } ].map((item, i) => (
                            <motion.a
                                key={i}
                                href={item.href}
                                whileHover={{ y: -5, scale: 1.1 }}
                                className="w-12 h-12 glass rounded-full flex items-center justify-center hover:text-accent transition-colors"
                            >
                                <item.Icon size={20} />
                            </motion.a>
                        ))}
                    </div>
                </div>

                {/* Form Side */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="glass p-8 md:p-12 rounded-[2rem] border-white/5 relative"
                >
                    {isSubmitted ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-center py-20"
                        >
                            <div className="w-20 h-20 bg-accent text-background rounded-full flex items-center justify-center mx-auto mb-6">
                                <Send size={40} />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                            <p className="text-white/40 font-medium">I'll get back to you shortly.</p>
                            <button
                                onClick={() => setIsSubmitted(false)}
                                className="mt-8 text-accent text-sm font-bold uppercase tracking-widest hover:underline"
                            >
                                Send another
                            </button>
                        </motion.div>
                    ) : (
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest text-white/40 ml-1">Name</label>
                                    <input
                                        {...register('name', { required: true })}
                                        className={`w-full bg-white/5 border ${errors.name ? 'border-red-500/50' : 'border-white/10'} rounded-xl px-6 py-4 focus:outline-none focus:border-accent transition-colors`}
                                        placeholder="Enter full name"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest text-white/40 ml-1">Email</label>
                                    <input
                                        {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                                        className={`w-full bg-white/5 border ${errors.email ? 'border-red-500/50' : 'border-white/10'} rounded-xl px-6 py-4 focus:outline-none focus:border-accent transition-colors`}
                                        placeholder="hello@world.com"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-white/40 ml-1">Message</label>
                                <textarea
                                    {...register('message', { required: true })}
                                    rows={5}
                                    className={`w-full bg-white/5 border ${errors.message ? 'border-red-500/50' : 'border-white/10'} rounded-xl px-6 py-4 focus:outline-none focus:border-accent transition-colors resize-none`}
                                    placeholder="What's on your mind?"
                                />
                            </div>
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                disabled={isSubmitting}
                                className="w-full py-5 bg-gradient-to-r from-accent to-accent-purple text-background font-black rounded-xl uppercase tracking-widest flex items-center justify-center gap-3 disabled:opacity-50"
                            >
                                {isSubmitting ? 'Sending...' : (
                                    <>
                                        Send Message <Send size={18} />
                                    </>
                                )}
                            </motion.button>
                        </form>
                    )}
                </motion.div>
            </div>
        </section>
    )
}

export default Contact
