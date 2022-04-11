
using Microsoft.AspNetCore.Mvc;

public class SSEController : Controller
{
    [HttpGet("/sse")]
    public async Task SSE()
    {
        await HttpContext.SSEInitAsync();
        Thread.Sleep(500);
        await HttpContext.SSESendDataAsync("test");
    }
}