const chatRoutes = require('./routes/chatRoutes');

// Routes
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/chat', chatRoutes); 